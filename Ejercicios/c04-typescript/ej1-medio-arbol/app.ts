const num = document.querySelector<HTMLInputElement>("#numero")
const button = document.querySelector<HTMLButtonElement>("#validar")
const mensjeError= document.querySelector<HTMLParagraphElement>("#mensajeError")
const asterisc = document.querySelector<HTMLPreElement>("#asteriscos")
if (num && button && mensjeError && asterisc){
    button.addEventListener ("click", () =>{
        const valor= num.value;
        if (valor === "" || Number(valor) < 1){
            mensjeError.textContent= "Error el campo no puede estar vacio o contener numeros negativos";
        } else{
            mensjeError.textContent="";
            const resultado= genAsteriscos(Number(valor));
            asterisc.textContent=resultado;
        }
    });
}

function genAsteriscos(n:number):string{
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