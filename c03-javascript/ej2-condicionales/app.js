
function clasificarNota(nota){
    let resultado;
    if (nota<4){
        resultado="Desaprobado";
    }
    else if(nota>8){
        resultado="Promocionado";
    }
    else{
        resultado="Aprobado";
    }
    return resultado;
}

function diaDeLaSemana(numero){
    switch(numero){
        case 1:console.log("lunes"); break;
        case 2:console.log("martes"); break;
        case 3:console.log("miercoles"); break;
        case 4:console.log("jueves"); break;
        case 5:console.log("viernes"); break;
        case 6:console.log("sabado(fin de semana)"); break;
        case 7:console.log("domingo(fin de semana)"); break;
        default:console.log("Dia invalido");

    }
}
console.log(clasificarNota(3));
console.log(clasificarNota(7));
console.log(diaDeLaSemana(3));
console.log(diaDeLaSemana(9));