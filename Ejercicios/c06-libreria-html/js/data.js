async function obtenerLibros(val) {
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${val}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const datos = await response.json();
        const libros = datos.docs;
        return libros;
    }
    catch (error) {
        console.error('error al buscar libros', error);
        return [];
    }
}

const input = document.querySelector("#input");
const boton = document.querySelector("#boton");
const result = document.querySelector("#resultados");
if (boton && input && result) {
    boton.addEventListener("click", async () => {
        let valor = input.value;
        if (valor === "") {
            result.textContent = "error al buscar el libro";
            return;
        }
        result.textContent = "buscando...";
        const libros = await obtenerLibros(valor);
        const diezlibros = libros.slice(0, 10);
        result.textContent = "";
        diezlibros.forEach(libro => {
            result.innerHTML += `
      <div class="col">
        <div class="card h-100 shadow-sm">
          
          <img src="./imagenes/download.jpg" class="card-img-top" alt="Portada genérica" style="height: 300px; object-fit: cover;">
          
          <div class="card-body d-flex flex-column">
            
            <h5 class="card-title">${libro.title}</h5>
            
            <p class="card-text text-muted">${libro.author_name ? libro.author_name.join(", ") : "Autor Desconocido"}</p>
            
    
          </div>
        </div>
      </div>
    `;
        });
    });
}
