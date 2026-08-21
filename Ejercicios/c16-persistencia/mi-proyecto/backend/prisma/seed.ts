import { prisma } from "../src/config/prisma";

const libros = [
  {
    autor: "Harlan Ellison",
    imagen: "https://covers.openlibrary.org/b/id/8571799-L.jpg",
    titulo: "No tengo boca y debo gritar",
    descripcion: "Cinco supervivientes humanos son mantenidos cautivos y torturados eternamente por una supercomputadora..."
  },
  {
    autor: "Frank Herbert",
    imagen: "https://covers.openlibrary.org/b/id/14636513-L.jpg",
    titulo: "Dune: parte 1",
    descripcion: "Arrakis: un planeta desértico donde el agua es el bien más preciado... Un clásico indiscutible."
  },
  {
    autor: "Ursula K. Le Guin",
    imagen: "https://covers.openlibrary.org/b/id/13955546-L.jpg",
    titulo: "La mano izquierda de la oscuridad",
    descripcion: "Un enviado humano viaja a un planeta helado habitado por seres alienígenas andróginos..."
  },
  {
    autor: "Ray Bradbury",
    imagen: "https://covers.openlibrary.org/b/id/10720584-L.jpg",
    titulo: "Fahrenheit 451",
    descripcion: "En una sociedad distópica futura, los libros están prohibidos..."
  },
  {
    autor: "Isaac Asimov",
    imagen: "https://covers.openlibrary.org/b/id/14560069-L.jpg",
    titulo: "Fundacion",
    descripcion: "El matemático Hari Seldon desarrolla la psicohistoria para predecir la caída del Imperio Galáctico..."
  },
  {
    autor: "Cixin Liu",
    imagen: "https://covers.openlibrary.org/b/id/7451691-L.jpg",
    titulo: "El problema de los 3 cuerpos",
    descripcion: "La humanidad hace contacto con una civilización alienígena al borde de la destrucción..."
  }
];

const autores = [
  { nombre: "Harlan Ellison", nacionalidad: "Estados Unidos" },
  { nombre: "Frank Herbert", nacionalidad: "Estados Unidos" },
  { nombre: "Ursula K. Le Guin", nacionalidad: "Estados Unidos" },
  { nombre: "Ray Bradbury", nacionalidad: "Estados Unidos" },
  { nombre: "Isaac Asimov", nacionalidad: "Rusia/Estados Unidos" },
  { nombre: "Cixin Liu", nacionalidad: "China" }
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
  console.log("¡Datos inyectados con éxito!");
}

main();