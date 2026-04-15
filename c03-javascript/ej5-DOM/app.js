const numero= document.querySelector("#numero");
const boton= document.querySelector("#validar");
const mensajeError= document.querySelector("#mensajeError");
const asterisco= document.querySelector("#asteriscos");
boton.addEventListener ("click", () =>{
    const valor= numero.value;
    if (valor === "" || Number(valor) < 1){
        mensajeError.textContent= "Error el campo no puede estar vacio o contener numeros negativos";
    } else{
        mensajeError.textContent="";
        const resultado= generarAsteriscos(Number(valor));
        asterisco.textContent=resultado;
    }
});



function generarAsteriscos(n){
    let linea="";
    for (let i=0; i<n;i++){
        let asterisco="";
        
        for(let j=0; j<i+1;j++){
            asterisco=asterisco+"*";
            
        }
        linea=linea + asterisco + "\n";
    }
    return linea;
}
