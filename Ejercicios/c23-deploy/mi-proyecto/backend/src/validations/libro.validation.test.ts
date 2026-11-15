import { describe, it, expect } from "vitest";
import { libroCreateSchema, idParamSchema } from "./libro.validation";

const libroValido = {
  titulo: "Rayuela",
  autorId: 1,
  imagen: "https://covers.openlibrary.org/b/id/8571799-L.jpg",
  descripcion: "Novela de Julio Cortázar",
};

describe("libroCreateSchema", () => {
  it("acepta un libro válido", () => {
    expect(libroCreateSchema.safeParse(libroValido).success).toBe(true);
  });

  it("rechaza un libro sin título", () => {
    const { titulo: _t, ...sinTitulo } = libroValido;
    expect(libroCreateSchema.safeParse(sinTitulo).success).toBe(false);
  });

  it("rechaza un autorId que no es número", () => {
    const r = libroCreateSchema.safeParse({ ...libroValido, autorId: "no-es-un-numero" });
    expect(r.success).toBe(false);
  });
});

describe("idParamSchema", () => {
  it("rechaza un id que no es numérico", () => {
    expect(idParamSchema.safeParse({ id: "abc" }).success).toBe(false);
  });
});