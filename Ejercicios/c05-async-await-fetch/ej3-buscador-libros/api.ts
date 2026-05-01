export interface LibroOL {
    title:string;
    author_name?:string[];
    first_publish_year?:number;
}

export async function obtenerLibros(val:string):Promise<LibroOL[]> {
    try{
        const response= await fetch (`https://openlibrary.org/search.json?q=${val}`);
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }
        const datos = await response.json();
        const libros:LibroOL[]=datos.docs;
        return libros;
    }
    catch(error){
        console.error('error al buscar libros',error);
        return [];
    }
    
}