let tipo = prompt("¿Quieres ver tablas de números pares o impares? Escribe 'pares' o 'impares':").toLowerCase();

if (tipo === "pares" || tipo === "impares") {
    for (let i = 1; i <= 10; i++) {
        if ((tipo === "pares" && i % 2 === 0) || (tipo === "impares" && i % 2 !== 0)) {
            console.log(`Tabla del ${i}`);
            for (let j = 1; j <= 12; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
            console.log("-------------");
        }
    }
} else {
    console.log("Opción no válida. Escribe 'pares' o 'impares'.");
}