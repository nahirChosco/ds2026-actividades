import { Request, Response } from "express";
import * as libroService from "../services/libro.service";

export async function getAll(_req: Request, res: Response) {
  const libros = await libroService.findAll();
  res.json(libros);
}

export async function getById(req: Request, res: Response) {
  const libro = await libroService.findById(Number(req.params.id));
  if (!libro) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.json(libro);
}

export async function create(req: Request, res: Response) {
  const nuevoLibro = await libroService.create(req.body);
  res.status(201).json(nuevoLibro);
}

export async function update(req: Request, res: Response) {
  const libro = await libroService.update(Number(req.params.id), req.body);
  if (!libro) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.json(libro);
}

export async function remove(req: Request, res: Response) {
  const ok = await libroService.remove(Number(req.params.id));
  if (!ok) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.status(204).send();
}