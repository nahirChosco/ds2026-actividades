import { describe, it, expect } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { JWT_SECRET } from "../config/env";

const tokenCliente = jwt.sign({ id: 2, rol: "CLIENTE" }, JWT_SECRET, { expiresIn: "1h" });
const tokenAdmin = jwt.sign({ id: 1, rol: "ADMIN" }, JWT_SECRET, { expiresIn: "1h" });

const libroNuevo = {
  titulo: "Rayuela",
  autorId: 1,
  imagen: "https://covers.openlibrary.org/b/id/8571799-L.jpg",
  descripcion: "Novela de Julio Cortázar",
};

describe("matriz de permisos: libros (sin DB)", () => {
  it("POST sin token → 401", async () => {
    const res = await request(app).post("/api/libros").send(libroNuevo);
    expect(res.status).toBe(401);
  });

  it("POST con token de CLIENTE → 403", async () => {
    const res = await request(app).post("/api/libros")
      .set("Authorization", `Bearer ${tokenCliente}`).send(libroNuevo);
    expect(res.status).toBe(403);
  });

  it("POST de ADMIN con body inválido → 400, no 403", async () => {
    const res = await request(app).post("/api/libros")
      .set("Authorization", `Bearer ${tokenAdmin}`).send({ autorId: "no-es-un-numero" });
    expect(res.status).toBe(400);
  });

  it("POST con token adulterado → 401", async () => {
    const falso = jwt.sign({ id: 1, rol: "ADMIN" }, "otro-secret");
    const res = await request(app).post("/api/libros")
      .set("Authorization", `Bearer ${falso}`).send(libroNuevo);
    expect(res.status).toBe(401);
  });

  it("DELETE con token de CLIENTE → 403", async () => {
    const res = await request(app).delete("/api/libros/1")
      .set("Authorization", `Bearer ${tokenCliente}`);
    expect(res.status).toBe(403);
  });

  it("ruta inexistente → 404 en JSON", async () => {
    const res = await request(app).get("/api/no-existe");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "Ruta no encontrada" });
  });
});