import { Request, Response } from "express";
import * as authService from "../services/auth.services";
import { prisma } from "../config/prisma";

export async function registrar(req: Request, res: Response) {
  const usuario = await authService.registrar(req.body);
  return res.status(201).json(usuario);
}

export async function login(req: Request, res: Response) {
  const resultado = await authService.login(req.body);

  if (!resultado) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  return res.json(resultado);
}

export async function obtenerPerfil(req: Request, res: Response): Promise<any> {
  try {
    const userId = req.usuario?.id;

    if (!userId) {
      return res.status(401).json({ error: "Token inválido o no proporcionado" });
    }

    const usuario = await prisma.usuario.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        rol: true,
      },
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    return res.json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}