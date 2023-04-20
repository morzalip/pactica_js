// operador ternario
const velocidad =120;
let mensaje;
if (velocidad > 100) {
    mensaje = "vas muy rapido";
} else {
    mensaje = "vas bien mano"
}
console.log(mensaje);

// operador ternario ejemplo

const Velocidad = 90;
const Mensaje = Velocidad > 100 ? "vas muy rapido" : "vas bien mano";

console.log(Mensaje);


//ciclo for
for (let i = 0; i < 10; i++) {
    if(i==5) break
    console.log(i);
    
}

//ciclo for
for (let i = 0; i < 10; i++) {
    if(i==5) continue
    console.log(i);
    
}

//ciclo while
let i = 0;
while (i < 10) {
    console.log(i);
i++;
}

//numeros pares
for (let i = 0; i <=100; i++){
    if(i%2==0){
    console.log(i);
    }
}

//numeros primos
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
}
console.log(esPrimo(5));
console.log(esPrimo(6)); 


for (i=2; i<100; i++){
    let primo = true;
    for(let j=2; j<i; j++){
        if (i%j==0){
            primo = false;
        }
    }
    if (primo){
        console.log(i);
    }
}