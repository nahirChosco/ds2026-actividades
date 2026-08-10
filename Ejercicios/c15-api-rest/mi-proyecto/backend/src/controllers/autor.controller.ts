import { Request, Response } from "express";
import * as autorService from "../services/autor.service";

export function getAll(_req: Request, res: Response) {
  const autores = autorService.findAll();
  res.json(autores);
}

export function getById(req: Request, res: Response) {
  const autor = autorService.findById(Number(req.params.id));
  if (!autor) {
    return res.status(404).json({ error: "Autor no encontrado" });
  }
  res.json(autor);
}

export function create(req: Request, res: Response) {
  const nuevoAutor = autorService.create(req.body);
  res.status(201).json(nuevoAutor);
}

export function update(req: Request, res: Response) {
  const autor = autorService.update(Number(req.params.id), req.body);
  if (!autor) {
    return res.status(404).json({ error: "Autor no encontrado" });
  }
  res.json(autor);
}

export function remove(req: Request, res: Response) {
  const ok = autorService.remove(Number(req.params.id));
  if (!ok) {
    return res.status(404).json({ error: "Autor no encontrado" });
  }
  res.status(204).send();
}