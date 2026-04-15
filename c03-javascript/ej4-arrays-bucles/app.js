const primos= [2,3,5,7,11,13,17,19];
let mayor=primos[0];
let menor=primos[0];
let sum=primos[0];
for (let i=0; i< primos.length; i++){
    sum=sum+primos[i];
    if(primos[i]>mayor){
        mayor=primos[i];
    }
    if(primos[i]<menor){
        menor=primos[i];
    }
}
let promedio= sum/primos.length;
console.log(`El promedio es: ${promedio}, la suma es ${sum}, el numero menor es ${menor}, el numero mayor es ${mayor}`);
