const filtroAutor = document.querySelector<HTMLInputElement>("#filtroAutor");
const botonFiltrar = document.querySelector<HTMLButtonElement>("#filtrar");
const botonMostrarDispo = document.querySelector<HTMLButtonElement>("#mostrarDisponibles");
const botonMostrarTodos = document.querySelector<HTMLButtonElement>("#mostrarTodos");
const listado = document.querySelector<HTMLUListElement>("#listado");
const stats = document.querySelector<HTMLParagraphElement>("#stats");

interface Libro{
    isbn: string
    titulo: string
    autor: string
    precio: number
    disponible: boolean
    genero?: string
}
const catalogo : Libro []=[
{isbn:"123", titulo:"El principito", autor:"Antoine de Saint-Exupery", precio:50000, disponible: true },
{isbn:"456", titulo:"Los juegos del Hambre", autor:"Suzanne Collins", precio:67500, disponible: true },
{isbn:"789", titulo:"Alas de Sangre", autor:"Rebecca Yarros", precio:43600, disponible: false},
{isbn:"222", titulo:"Orgullo y prejuicio", autor:"Jane Austen", precio:39700, disponible: true },
{isbn:"321", titulo:"La divina comedia", autor:"Dante Alighieri", precio:52450, disponible: false },
{isbn:"987", titulo:"Sentido y Sensibilidad", autor:"Jane Austen", precio:39760, disponible: true }

]



function buscarPorAutor(autor: string): Libro[]{
return catalogo.filter(libro => libro.autor.includes(autor));

}
function librosDisponibles(): Libro []{
return catalogo.filter(libro => libro.disponible == true);
}
function precioPromedio(libros:Libro[]):number{
let acum =0;
for(let libro of libros){
    acum= acum + libro.precio;
}
let resultado = acum/libros.length;
return resultado;
}
function renderizar(libros:Libro[]): void{
    if (listado && stats){
        listado.innerHTML="";
        for(let libro of libros){
            const li = document.createElement("li");
            li.textContent= `${libro.titulo} - ${libro.autor}`;
            listado.appendChild(li);
        }
        let promedio = precioPromedio(libros);
        stats.textContent=`cantidad de libros: ${libros.length} - Precio promedio: $${promedio}`;
    }
}

if(botonFiltrar && botonMostrarDispo && botonMostrarTodos &&filtroAutor){
    botonFiltrar.addEventListener ("click", ()=>{
        let autor = filtroAutor.value;
        renderizar(buscarPorAutor(autor));
    }
    );
    botonMostrarDispo.addEventListener("click",()=>{
        renderizar(librosDisponibles())
    });
    botonMostrarTodos.addEventListener("click",()=>{
        renderizar(catalogo);
    });
}
renderizar(catalogo);