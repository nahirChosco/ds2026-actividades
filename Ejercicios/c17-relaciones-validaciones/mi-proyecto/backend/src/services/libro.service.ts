import { prisma } from "../config/prisma";
import { Prisma } from "../generated/prisma/client";

// Tipos dinámicos generados por Prisma
export type LibroConAutor = Prisma.LibroGetPayload<{ 
  include: { autor: true } 
}>;

export type LibroDetalle = Prisma.LibroGetPayload<{
  include: { autor: true, categorias: true } 
}>;

export async function findAll(): Promise<LibroConAutor[]> {
  return prisma.libro.findMany({
    include: { autor: true }
  });
}

export async function findById(id: number): Promise<LibroDetalle | null> {
  return prisma.libro.findUnique({ 
    where: { id },
    include: { autor: true, categorias: true }
  });
}

// Usamos los inputs nativos de Prisma temporalmente hasta agregar Zod
export async function create(datos: Prisma.LibroUncheckedCreateInput): Promise<LibroDetalle> {
  return prisma.libro.create({ 
    data: datos,
    include: { autor: true, categorias: true }
  });
}

export async function update(id: number, datos: Prisma.LibroUncheckedUpdateInput): Promise<LibroDetalle | null> {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return null;
  
  return prisma.libro.update({
    where: { id },
    data: datos,
    include: { autor: true, categorias: true }
  });
}

export async function remove(id: number): Promise<boolean> {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return false;
  
  await prisma.libro.delete({ where: { id } });
  return true;
}