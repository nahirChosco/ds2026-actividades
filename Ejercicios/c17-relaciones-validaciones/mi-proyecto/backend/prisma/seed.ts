import { prisma } from "../src/config/prisma";

const autores = [
  { nombre: "Harlan Ellison", nacionalidad: "Estados Unidos" },
  { nombre: "Frank Herbert", nacionalidad: "Estados Unidos" },
  { nombre: "Ursula K. Le Guin", nacionalidad: "Estados Unidos" },
  { nombre: "Ray Bradbury", nacionalidad: "Estados Unidos" },
  { nombre: "Isaac Asimov", nacionalidad: "Rusia/Estados Unidos" },
  { nombre: "Cixin Liu", nacionalidad: "China" }
];

const categorias = [
  { nombre: "Ciencia Ficción" },
  { nombre: "Distopía" },
  { nombre: "Space Opera" }
];

const libros = [
  {
    autor: "Harlan Ellison",
    cats: ["Ciencia Ficción", "Distopía"],
    imagen: "https://covers.openlibrary.org/b/id/8571799-L.jpg",
    titulo: "No tengo boca y debo gritar",
    descripcion: "Cinco supervivientes humanos son mantenidos cautivos..."
  },
  {
    autor: "Frank Herbert",
    cats: ["Ciencia Ficción", "Space Opera"],
    imagen: "https://covers.openlibrary.org/b/id/14636513-L.jpg",
    titulo: "Dune: parte 1",
    descripcion: "Arrakis: un planeta desértico donde el agua es el bien más preciado..."
  },
  {
    autor: "Ursula K. Le Guin",
    cats: ["Ciencia Ficción"],
    imagen: "https://covers.openlibrary.org/b/id/13955546-L.jpg",
    titulo: "La mano izquierda de la oscuridad",
    descripcion: "Un enviado humano viaja a un planeta helado..."
  },
  {
    autor: "Ray Bradbury",
    cats: ["Ciencia Ficción", "Distopía"],
    imagen: "https://covers.openlibrary.org/b/id/10720584-L.jpg",
    titulo: "Fahrenheit 451",
    descripcion: "En una sociedad distópica futura, los libros están prohibidos..."
  },
  {
    autor: "Isaac Asimov",
    cats: ["Ciencia Ficción", "Space Opera"],
    imagen: "https://covers.openlibrary.org/b/id/14560069-L.jpg",
    titulo: "Fundacion",
    descripcion: "El matemático Hari Seldon desarrolla la psicohistoria..."
  },
  {
    autor: "Cixin Liu",
    cats: ["Ciencia Ficción"],
    imagen: "https://covers.openlibrary.org/b/id/7451691-L.jpg",
    titulo: "El problema de los 3 cuerpos",
    descripcion: "La humanidad hace contacto con una civilización alienígena..."
  }
];

async function main() {
  await prisma.autor.createMany({ data: autores });
  await prisma.categoria.createMany({ data: categorias });

  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cats.map(nombre => ({ nombre })) }
      }
    });
  }
  
  console.log("¡Datos inyectados con éxito!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });