import { describe, it, expect } from "vitest";
import { loginSchema, registroSchema } from "./auth.validation";

describe("loginSchema", () => {
  it("rechaza un email con formato inválido", () => {
    expect(loginSchema.safeParse({ email: "no-es-mail", password: "x" }).success).toBe(false);
  });
});

describe("registroSchema", () => {
  it("rechaza una contraseña débil", () => {
    const r = registroSchema.safeParse({ nombre: "Ana", email: "ana@libreria.test", password: "corta" });
    expect(r.success).toBe(false);
  });
});