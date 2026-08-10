import { Libro } from "../types/libro.types";

let libros: Libro[] = [
  {
    id: 1,
    autor: "Harlan Ellison",
    imagen: "https://covers.openlibrary.org/b/id/8571799-L.jpg",
    titulo: "No tengo boca y debo gritar",
    descripcion: "Cinco supervivientes humanos son mantenidos cautivos y torturados eternamente por una supercomputadora omnipotente y rencorosa llamada AM tras un apocalipsis mundial."
  },
  {
    id: 2,
    autor: "Frank Herbert",
    imagen: "https://covers.openlibrary.org/b/id/14636513-L.jpg",
    titulo: "Dune: parte 1",
    descripcion: "Arrakis: un planeta desértico donde el agua es el bien más preciado... Un clásico indiscutible de la ciencia ficción y la intriga política."
  },
  {
    id: 3,
    autor: "Ursula K. Le Guin",
    imagen: "https://covers.openlibrary.org/b/id/13955546-L.jpg",
    titulo: "La mano izquierda de la oscuridad",
    descripcion: "Un enviado humano viaja a un planeta helado habitado por seres alienígenas andróginos que pueden cambiar de género, explorando temas de sociedad y biología."
  },
  {
    id: 4,
    autor: "Ray Bradbury",
    imagen: "https://covers.openlibrary.org/b/id/10720584-L.jpg",
    titulo: "Fahrenheit 451",
    descripcion: "En una sociedad distópica futura, los libros están prohibidos y los 'bomberos' tienen la misión de quemar cualquiera que encuentren."
  },
  {
    id: 5,
    autor: "Isaac Asimov",
    imagen: "https://covers.openlibrary.org/b/id/14560069-L.jpg",
    titulo: "Fundacion",
    descripcion: "El matemático Hari Seldon desarrolla la psicohistoria para predecir la caída del Imperio Galáctico y establece la Fundación para preservar el conocimiento."
  },
  {
    id: 6,
    autor: "Cixin Liu",
    imagen: "https://covers.openlibrary.org/b/id/7451691-L.jpg",
    titulo: "El problema de los 3 cuerpos",
    descripcion: "La humanidad hace contacto con una civilización alienígena al borde de la destrucción, lo que desata una crisis global dividiendo a la Tierra."
  }
];

let proximoId = 7;

export function findAll(): Libro[] {
  return libros;
}

export function findById(id: string | number): Libro | undefined {
  return libros.find(l => String(l.id) === String(id));
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevoLibro: Libro = {
    id: proximoId++,
    ...datos
  };
  libros.push(nuevoLibro);
  return nuevoLibro;
}

export function update(id: string | number, datos: Omit<Libro, "id">): Libro | undefined {
  const index = libros.findIndex(l => String(l.id) === String(id));
  if (index === -1) return undefined;
  
  libros[index] = { id, ...datos };
  return libros[index];
}

export function remove(id: string | number): boolean {
  const index = libros.findIndex(l => String(l.id) === String(id));
  if (index === -1) return false;
  
  libros.splice(index, 1);
  return true;
}