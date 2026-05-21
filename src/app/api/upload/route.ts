import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { media } from "@/lib/db/schema";
import { UploadMediaPayloadSchema } from "@/lib/schemas";
import { storage } from "@/lib/storage";
import {
  getMediaTypeFromMime,
  type UploadMediaResult,
  uploadMedia,
  validateMediaType,
} from "@/lib/utils/storage";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  const user = session?.user;

  if (!user) {
    return Response.json(
      { success: false, error: "Usted no está autorizado" },
      { status: 401 },
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return Response.json(
      { success: false, error: "No se proporcionó ningún archivo" },
      { status: 400 },
    );
  }

  const parsed = UploadMediaPayloadSchema.safeParse({
    alt: formData.get("alt")?.toString(),
    prefix: formData.get("prefix")?.toString(),
    isPublic: formData.get("isPublic")?.toString(),
  });

  if (!parsed.success) {
    return Response.json(
      {
        success: false,
        error: "Datos inválidos",
        details: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const MAX_SIZE = 100 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    return Response.json(
      {
        success: false,
        error: "El archivo es demasiado grande (máximo 100MB)",
      },
      { status: 413 },
    );
  }

  const mediaType = getMediaTypeFromMime(file.type);

  if (!validateMediaType(file.type, mediaType)) {
    return Response.json(
      { success: false, error: `Tipo de archivo no válido para ${mediaType}` },
      { status: 415 },
    );
  }

  const isPublic = parsed.data.isPublic ?? true;

  let uploadResult: UploadMediaResult | undefined;

  try {
    uploadResult = await uploadMedia({
      file,
      filename: file.name,
      prefix: parsed.data.prefix || mediaType.toLowerCase(),
      metadata: {
        uploadedBy: user.id,
        originalName: file.name,
      },
    });

    const [createdMedia] = await db
      .insert(media)
      .values({
        objectKey: uploadResult.objectKey,
        url: isPublic ? uploadResult.url : null,
        alt: parsed.data.alt,
        type: mediaType,
        size: uploadResult.size,
        mimeType: uploadResult.mimeType,
        filename: uploadResult.filename,
        uploadedBy: user.id,
      })
      .returning();

    if (!createdMedia) {
      throw new Error("No se pudo registrar el archivo en base de datos");
    }

    return Response.json(
      { success: true, data: createdMedia },
      { status: 201 },
    );
  } catch (error) {
    if (uploadResult?.objectKey) {
      try {
        await storage.delete(uploadResult.objectKey);
      } catch {
        // ignore cleanup failures
      }
    }

    const message =
      error instanceof Error
        ? `Error al subir el archivo: ${error.message}`
        : "Error al subir el archivo";

    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
