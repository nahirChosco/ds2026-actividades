const botonAgregar= document.querySelector("#botonAgregar");
const lista = document.querySelector("#lista");
const producto = document.querySelector("#producto");
const contador= document.querySelector("#contador");
let contadorProductos=0;
botonAgregar.addEventListener("click", ()=>{
    const valor=producto.value.trim();
    if (valor === ""){
        return;
    }else{
    const elemento=document.createElement("li");
    elemento.textContent= valor;
    contadorProductos=contadorProductos+1;
    contador.textContent=contadorProductos;
    const botonEliminar=document.createElement("button");
    botonEliminar.textContent= "Eliminar";
    producto.value="";
    botonEliminar.addEventListener("click", ()=>{
        elemento.remove();
        botonEliminar.remove();
        contadorProductos=contadorProductos-1;
        contador.textContent=contadorProductos;
    });
    elemento.appendChild(botonEliminar);
    lista.appendChild(elemento);
}
});
