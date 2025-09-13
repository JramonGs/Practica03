const readline = require('readline');
/*
 function calcularPromedio(calificaciones) {
     let suma = 0;
     for (let calificacion of calificaciones) {
        suma += calificacion;
    }
    return suma / calificaciones.length;
 }
*/

const calcularPromedio = (calificaciones) => {
    let suma = 0;
    for (let calificacion of calificaciones) {
        suma += calificacion;
    }
    return suma / calificaciones.length;
};


const evaluarAlumno = (nombre, calificaciones) => {
    const promedio = calcularPromedio(calificaciones);
    if (promedio >= 7) {
        console.log(`¡Felicidades ${nombre}! Aprobaste con un promedio de ${promedio.toFixed(2)}.`);
    } else {
        console.log(`Lo siento ${nombre}, reprobaste con un promedio de ${promedio.toFixed(2)}.`);
    }
};


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el nombre del alumno: ', (nombre) => {
    rl.question('Ingresa las calificaciones separadas por comas (máximo 10): ', (input) => {
        const calificaciones = input.split(',').map(Number).slice(0, 10);
        if (calificaciones.some(isNaN)) {
            console.log('Por favor, ingresa solo números válidos para las calificaciones.');
        } else {
            evaluarAlumno(nombre, calificaciones);
        }
        rl.close();
    });
});