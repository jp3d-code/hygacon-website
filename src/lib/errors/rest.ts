type ErrorBody = {
  success: false;
  error: string;
};

export class HttpResponseError extends Response {
  constructor(status: number, message: string) {
    super(
      JSON.stringify({
        success: false,
        error: message,
      } satisfies ErrorBody),
      {
        status,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

export class UnauthorizedError extends HttpResponseError {
  constructor(message = "Usted no está autorizado para realizar esta acción") {
    super(401, message);
  }
}

export class BadRequestError extends HttpResponseError {
  constructor(message = "Solicitud inválida") {
    super(400, message);
  }
}

export class NotFoundError extends HttpResponseError {
  constructor(message = "Recurso no encontrado") {
    super(404, message);
  }
}

export class ForbiddenError extends HttpResponseError {
  constructor(message = "No tiene permisos para acceder a este recurso") {
    super(403, message);
  }
}

export class InternalServerError extends HttpResponseError {
  constructor(message = "Error interno del servidor") {
    super(500, message);
  }
}

export class ConflictError extends HttpResponseError {
  constructor(message = "Conflicto en la operación") {
    super(409, message);
  }
}

export class PayloadTooLargeError extends HttpResponseError {
  constructor(message = "El archivo es demasiado grande") {
    super(413, message);
  }
}

export class UnsupportedMediaTypeError extends HttpResponseError {
  constructor(message = "Tipo de archivo no soportado") {
    super(415, message);
  }
}
