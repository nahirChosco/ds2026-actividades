import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: any, req: Request, res: Response, next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: "Datos inválidos",
      detalles: err.issues.map(i => ({ campo: i.path.join("."), mensaje: i.message }))
    });
  }

  if (err?.code === "P2002") {
    return res.status(409).json({ error: "Ya existe un registro con ese valor" });
  }
  if (err?.code === "P2025") {
    return res.status(404).json({ error: "No encontrado" });
  }
  if (err?.code === "P2003") {
    return res.status(409).json({ error: "Error de clave foránea: el registro no existe o todavía tiene elementos relacionados" });
  }

  console.error("Error no manejado:", err);
  return res.status(500).json({ 
    error: "Error interno del servidor",
    debugMensaje: err?.message || "Sin mensaje",
    debugCodigo: err?.code || "Sin código",
    debugTipo: err?.name || "Sin tipo"
  });
};