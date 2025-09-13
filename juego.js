const readline = require('readline');

// Juego de adivinanza: Número de 1 a 100

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxIntentos = 10;

console.log("¡Bienvenido al juego de adivinanza!");
console.log("Adivina el número entre 1 y 100. Tienes un máximo de 10 intentos.");

function preguntar() {
    rl.question("Introduce tu número: ", (respuesta) => {
        const numeroUsuario = parseInt(respuesta, 10);
        intentos++;

        if (numeroUsuario === numeroSecreto) {
            console.log(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intento(s).`);
            rl.close();
        } else if (intentos >= maxIntentos) {
            console.log(`¡Lo siento! Has alcanzado el máximo de intentos. El número secreto era ${numeroSecreto}.`);
            rl.close();
        } else if (numeroUsuario > numeroSecreto) {
            console.log("Demasiado alto! Intenta de nuevo.");
            preguntar();
        } else if (numeroUsuario < numeroSecreto) {
            console.log("Demasiado bajo! Intenta de nuevo.");
            preguntar();
        } else {
            console.log("Entrada inválida. Por favor, introduce un número.");
            preguntar();
        }
    });
}

preguntar();