function calcularPrecioFinal(monto, medioPago){
let descuento;
if (monto<200){
    descuento=monto;
}else if (monto<400){
    if(medioPago == "E"){
        descuento=monto*0.7;
    }
    else if (medioPago == "D"){
        descuento=monto*0.8;
    }
    else{
        descuento=monto*0.9;
    }
}
else{
    descuento=monto*0.6;
}
return descuento;
}
console.log(`Monto: $190 | Pago:Efectivo | Final:$${calcularPrecioFinal(190,"E")}`);
console.log(`Monto: $300 | Pago:Efectivo | Final:$${calcularPrecioFinal(300,"E")}`);
console.log(`Monto: $250 | Pago:Debito | Final:$${calcularPrecioFinal(250,"D")}`);
console.log(`Monto: $500 | Pago:Credito | Final:$${calcularPrecioFinal(500,"C")}`);
console.log(`Monto: $390 | Pago:Credito | Final:$${calcularPrecioFinal(390,"C")}`);
