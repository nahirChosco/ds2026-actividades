import { Request, Response } from "express";
import * as libroService from "../services/libro.service";

export function getAll(_req: Request, res: Response) {
  const libros = libroService.findAll();
  res.json(libros);
}

export function getById(req: Request, res: Response) {
  const libro = libroService.findById(String(req.params.id));
  if (!libro) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.json(libro);
}

export function create(req: Request, res: Response) {
  const nuevoLibro = libroService.create(req.body);
  res.status(201).json(nuevoLibro); // 201: Created
}

export function update(req: Request, res: Response) {
  const libro = libroService.update(String(req.params.id), req.body);
  if (!libro) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.json(libro);
}

export function remove(req: Request, res: Response) {
  const ok = libroService.remove(String(req.params.id));
  if (!ok) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.status(204).send(); // 204: No Content (va con .send() vacío)
}