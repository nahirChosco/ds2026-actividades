const filtroAutor = document.querySelector<HTMLInputElement>("#filtroAutor");
const botonFiltrar = document.querySelector<HTMLButtonElement>("#filtrar");
const botonMostrarDispo = document.querySelector<HTMLButtonElement>("#mostrarDisponibles");
const botonMostrarTodos = document.querySelector<HTMLButtonElement>("#mostrarTodos");
const listado = document.querySelector<HTMLUListElement>("#listado");
const stats = document.querySelector<HTMLParagraphElement>("#stats");
const tituloLibro = document.querySelector<HTMLInputElement>("#tituloLibro");
const autorLibro = document.querySelector<HTMLInputElement>("#autorLibro");
const precioLibro = document.querySelector<HTMLInputElement>("#precioLibro");
const generoLibro = document.querySelector<HTMLInputElement>("#generoLibro");
const dispoLibro = document.querySelector<HTMLInputElement>("#dispLibro");
const botonAgregar = document.querySelector<HTMLButtonElement>("#agregarLibro");
const errorForm = document.querySelector<HTMLDivElement>("#errorForm");


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
            const boton = document.createElement("button");
            boton.textContent = `eliminar `;
            boton.addEventListener("click",()=>{
                eliminarLibro(libro.isbn);
            })
            li.appendChild(boton);
        }
        let promedio = precioPromedio(libros);
        stats.textContent=`cantidad de libros: ${libros.length} - Precio promedio: $${promedio}`;
    }
}

function agregarLibro(libro:Libro):void{
    catalogo.push(libro);
    renderizar(catalogo);
}
function eliminarLibro(isbn:string):void{
    let posicion= catalogo.findIndex(libro => libro.isbn === isbn);
    if (posicion !== -1){
        catalogo.splice(posicion,1);
        renderizar(catalogo);
    }
}
function validarFormulario():Libro | null{
    if (tituloLibro && autorLibro && precioLibro && dispoLibro && generoLibro){
    let precio= Number(precioLibro.value);
    let titulo = tituloLibro.value;
    let autor = autorLibro.value;
    let dispo= dispoLibro.checked;
    let genero = generoLibro.value;
    if (titulo === "" || autor=== "" || genero ==="" ||precio < 0){
        return null;
    }
    
    return {
        isbn : "AUTO-" + Date.now(),
        titulo : titulo,
        autor : autor,
        precio : precio,
        disponible: dispo,
        genero: genero
    };
}
    return null;
}

if(botonFiltrar && botonMostrarDispo && botonMostrarTodos &&filtroAutor && botonAgregar && errorForm){
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
    botonAgregar.addEventListener("click",() =>{
        let resultado = validarFormulario();
        if(resultado === null){
            errorForm.textContent="ERROR AL VALIDAR FORMULARIO";
            
        }else{
            if(tituloLibro && autorLibro && precioLibro && generoLibro && dispoLibro){
          agregarLibro(resultado);
          tituloLibro.value="";
          autorLibro.value="";
          precioLibro.value="";
          generoLibro.value="";
          dispoLibro.checked=false;
          errorForm.textContent="";
          }
        }
        
    });
}
renderizar(catalogo);