import { z } from "zod";

export const libroCreateSchema = z.object({
  titulo: z.string().trim().min(1, "El título es obligatorio").max(200),
  descripcion: z.string().trim().min(1, "La descripción es obligatoria"),
  imagen: z.string().url("Debe ser una URL válida").min(1, "La imagen es obligatoria"),
  disponible: z.boolean().optional(), // opcional porque Prisma tiene un @default(true)
  autorId: z.number().int().positive("El autor es obligatorio")
});

export const libroUpdateSchema = libroCreateSchema.partial();

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive("El id debe ser un número positivo")
});

export type LibroCreate = z.infer<typeof libroCreateSchema>;