import { z } from "zod";

export const ArticleStatus = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);

export const createArticleSchema = z.object({
  title: z
    .string({ message: "El título es requerido" })
    .min(5, { message: "El título debe tener al menos 5 caracteres" })
    .max(200, { message: "El título no puede tener más de 200 caracteres" }),
  slug: z
    .string({ message: "El slug es requerido" })
    .min(3, { message: "El slug debe tener al menos 3 caracteres" })
    .max(200, { message: "El slug no puede tener más de 200 caracteres" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message:
        "El slug solo puede contener letras minúsculas, números y guiones",
    }),
  excerpt: z
    .string()
    .max(500, { message: "El extracto no puede tener más de 500 caracteres" })
    .optional(),
  content: z
    .string({ message: "El contenido es requerido" })
    .min(50, { message: "El contenido debe tener al menos 50 caracteres" }),
  status: ArticleStatus.optional(),
  readingTimeMin: z.number().int().positive().optional(),
  featuredImageId: z.string().optional(),
  publishedAt: z.string().datetime().optional().or(z.literal("")),
});

export const updateArticleSchema = z.object({
  title: z
    .string()
    .min(5, { message: "El título debe tener al menos 5 caracteres" })
    .max(200, { message: "El título no puede tener más de 200 caracteres" })
    .optional(),
  slug: z
    .string()
    .min(3, { message: "El slug debe tener al menos 3 caracteres" })
    .max(200, { message: "El slug no puede tener más de 200 caracteres" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message:
        "El slug solo puede contener letras minúsculas, números y guiones",
    })
    .optional(),
  excerpt: z
    .string()
    .max(500, { message: "El extracto no puede tener más de 500 caracteres" })
    .optional(),
  content: z
    .string()
    .min(50, { message: "El contenido debe tener al menos 50 caracteres" })
    .optional(),
  status: ArticleStatus.optional(),
  readingTimeMin: z.number().int().positive().optional(),
  featuredImageId: z.string().optional().nullable(),
  publishedAt: z.string().datetime().optional().or(z.literal("")).nullable(),
});

export const UploadMediaPayloadSchema = z.object({
  alt: z
    .string({
      message: "Se espera que el texto alternativo sea una cadena de texto",
    })
    .max(500, {
      message: "El texto alternativo no puede tener más de 500 caracteres",
    })
    .optional(),
  prefix: z
    .string({ message: "Se espera que el prefijo sea una cadena de texto" })
    .max(100, { message: "El prefijo no puede tener más de 100 caracteres" })
    .optional(),
  isPublic: z
    .string()
    .optional()
    .default("true")
    .transform((val) => val === "true"),
});

export const MediaTypeEnum = z.enum(["IMAGE", "VIDEO", "AUDIO", "FILE"], {
  message: "El tipo de medio debe ser IMAGE, VIDEO, AUDIO o FILE",
});

export const MediasPayloadSchema = z.object({
  take: z
    .number({
      message:
        "Se espera que el campo límite sea un número, no una cadena de texto",
    })
    .min(1, { message: "El campo límite debe ser al menos 1" })
    .max(100, { message: "El campo límite no puede ser mayor a 100" })
    .optional(),
  skip: z
    .number({
      message:
        "Se espera que el campo saltar sea un número, no una cadena de texto",
    })
    .min(0, { message: "El campo saltar debe ser al menos 0" })
    .max(1000, { message: "El campo saltar no puede ser mayor a 1000" })
    .optional(),
  type: MediaTypeEnum.optional(),
  search: z
    .string({
      message:
        "Se espera que el campo búsqueda sea una cadena de texto, no un número",
    })
    .min(1, { message: "El campo búsqueda debe tener al menos 1 caracteres" })
    .max(100, {
      message: "El campo búsqueda no puede tener más de 100 caracteres",
    })
    .optional(),
});

export const MediaPayloadSchema = z.object({
  id: z.cuid({ message: "Se espera que el identificador sea un CUID válido" }),
});

export const CreateMediaPayloadSchema = z.object({
  input: z.object({
    objectKey: z
      .string({ message: "Se espera que el objectKey sea una cadena de texto" })
      .min(1, { message: "El objectKey es requerido" }),
    url: z.url({ message: "La URL debe ser válida" }).optional(),
    alt: z
      .string({
        message: "Se espera que el texto alternativo sea una cadena de texto",
      })
      .max(500, {
        message: "El texto alternativo no puede tener más de 500 caracteres",
      })
      .optional(),
    type: MediaTypeEnum,
    size: z
      .number({ message: "Se espera que el tamaño sea un número" })
      .int({ message: "El tamaño debe ser un número entero" })
      .positive({ message: "El tamaño debe ser positivo" }),
    mimeType: z
      .string({ message: "Se espera que el mimeType sea una cadena de texto" })
      .min(1, { message: "El mimeType es requerido" }),
    filename: z
      .string({
        message: "Se espera que el nombre de archivo sea una cadena de texto",
      })
      .min(1, { message: "El nombre de archivo es requerido" })
      .max(255, {
        message: "El nombre de archivo no puede tener más de 255 caracteres",
      }),
  }),
});

export const UpdateMediaPayloadSchema = z.object({
  id: z.cuid({ message: "Se espera que el identificador sea un CUID válido" }),
  input: z.object({
    alt: z
      .string({
        message: "Se espera que el texto alternativo sea una cadena de texto",
      })
      .max(500, {
        message: "El texto alternativo no puede tener más de 500 caracteres",
      })
      .optional(),
    url: z.url({ message: "La URL debe ser válida" }).optional(),
  }),
});

export const DeleteMediaPayloadSchema = z.object({
  id: z.cuid({ message: "Se espera que el identificador sea un CUID válido" }),
});

export const UsersPayloadSchema = z.object({
  take: z
    .number({
      message:
        "Se espera que el campo límite sea un número, no una cadena de texto",
    })
    .min(1, { message: "El campo límite debe ser al menos 1" })
    .max(100, { message: "El campo límite no puede ser mayor a 100" })
    .optional(),
  skip: z
    .number({
      message:
        "Se espera que el campo saltar sea un número, no una cadena de texto",
    })
    .min(0, { message: "El campo saltar debe ser al menos 0" })
    .optional(),
  search: z
    .string({
      message:
        "Se espera que el campo búsqueda sea una cadena de texto, no un número",
    })
    .min(3, { message: "El campo búsqueda debe tener al menos 3 caracteres" })
    .max(50, {
      message: "El campo búsqueda no puede tener más de 50 caracteres",
    })
    .optional(),
});

export const UpdateMePayloadSchema = z.object({
  input: z.object({
    name: z
      .string({
        message:
          "Se espera que el nombre sea una cadena de texto, no un número",
      })
      .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
      .max(100, { message: "El nombre no puede tener más de 100 caracteres" })
      .optional(),
    image: z.url({ message: "La imagen debe ser una URL válida" }).optional(),
  }),
});

export const UpdateUserPayloadSchema = z.object({
  id: z.string({
    message:
      "Se espera que el identificador sea una cadena de texto, no un número",
  }),
  input: z.object({
    name: z
      .string({
        message:
          "Se espera que el nombre sea una cadena de texto, no un número",
      })
      .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
      .max(100, { message: "El nombre no puede tener más de 100 caracteres" })
      .optional(),
    image: z.url({ message: "La imagen debe ser una URL válida" }).optional(),
    role: z
      .enum(["ADMIN", "WRITER"], {
        message: "El rol debe ser ADMIN o WRITER",
      })
      .optional(),
  }),
});

export const DeleteUserPayloadSchema = z.object({
  id: z
    .string({
      message:
        "Se espera que el identificador sea una cadena de texto, no un número",
    })
    .min(1, { message: "El identificador no puede estar vacío" }),
});
