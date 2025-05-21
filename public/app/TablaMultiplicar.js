let entrada = prompt("Ingresa un número para ver su tabla de multiplicar (del 1 al 12):");
let numero = parseInt(entrada);

for (let i = 1; i <= 12; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
