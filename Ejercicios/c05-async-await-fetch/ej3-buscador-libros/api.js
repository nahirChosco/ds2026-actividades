export async function obtenerLibros(val) {
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
