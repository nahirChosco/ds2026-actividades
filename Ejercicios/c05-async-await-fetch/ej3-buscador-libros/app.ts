import {obtenerLibros} from "./api.js";
const input = document.querySelector<HTMLInputElement>("#input");
const boton = document.querySelector<HTMLButtonElement>("#boton");
const result= document.querySelector<HTMLDivElement>("#resultados");
if(boton && input && result){
boton.addEventListener("click",async()=>{
    let valor= input.value;
    if(valor === ""){
        result.textContent="error al buscar el libro"
        return;
    }
    result.textContent="buscando..."
    const libros= await obtenerLibros(valor);
    const diezlibros= libros.slice(0,10);
    result.textContent="";
    diezlibros.forEach(libro => {
        const item=document.createElement('div');
        item.textContent=`titulo:${libro.title} Año: ${libro.first_publish_year ? libro.first_publish_year : "Desconocido"} Autor:${libro.author_name ? libro.author_name.join(",") : "Desconocido"}`;
        result.appendChild(item);
        
    });
});
}