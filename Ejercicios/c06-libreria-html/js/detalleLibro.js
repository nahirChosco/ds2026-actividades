const titulo = document.querySelector("#detalle-titulo");
const autor = document.querySelector("#detalle-autor");
const desc = document.querySelector("#detalle-desc");
const parametros = new URLSearchParams(window.location.search);
const tituloBuscado = parametros.get("titulo");

async function cargarDetalle() {
    if (!tituloBuscado) {
        titulo.textContent = "No se seleccionó ningún libro.";
        autor.textContent = "";
        desc.textContent = "Por favor, volvé al catálogo y realizá una búsqueda.";
        return;
    }
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${tituloBuscado}`);
        const datos = await response.json();
                const libro = datos.docs[0];
        if (libro) {
            titulo.textContent = libro.title;
            autor.textContent = libro.author_name ? libro.author_name.join(", ") : "Autor desconocido";
            desc.textContent = `Año de primera publicación: ${libro.first_publish_year ? libro.first_publish_year : "Desconocido"}. Edición documentada en los registros de Open Library.`;
        } else {
            titulo.textContent = "Libro no encontrado";
            desc.textContent = "El libro solicitado no figura en la base de datos.";
        }
    } catch (error) {
        console.error("Error al cargar el detalle:", error);
    }
}
cargarDetalle();