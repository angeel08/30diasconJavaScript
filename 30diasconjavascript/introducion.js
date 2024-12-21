console.log("Welcome to 30DaysOfJavaScript");

let randomNum = Math.random(); //  0 a 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // esto da: min 0 y max 10.99        /* piensa el mismo número, pero uno piensa con decimales y otro piensa sin decimales */

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // esto da entre 0 y 10


let num1 = 3;
let num2 = 3;

console.log(num1 == num2); // verdadero


let js = "Java";
let py = "Python";

console.log(js == py); // Falso


let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // Falso

// Declarar diferentes variables de diferentes tipos de datos

let espacio = " ";
let Nombre = "Angel";
let apellido_1 = "Blázquez"
let apellido_2 = "Jiménez"
let pais = "España";
let ciudad = "Salamanca";
let idioma = "JavaScript";
let trabajo = "Alumno";
let edad = '16';

// ahora que ya estan declaradas, ya podemos poner lo que queramos

// 1º manera

let nombreCompleto = Nombre + espacio + apellido_1 + espacio + apellido_2;
let datosPersonaUno = nombreCompleto + ". Yo tengo " + edad + ". Vivo en" + espacio + pais; // Adición de cadena ES5.                 ejemplo de cadena

console.log(datosPersonaUno);

// Ya tenemos las variables declaradas, por eso no hace falta declararlas otra vez.

// 2º manera

let personaInfoDos = `Soy ${nombreCompleto}. Tengo ${edad} años. Vivo en ${pais}.`; //ES6 - Método de interpolación de cadenas
let personaInfoTres = `Soy ${nombreCompleto}. Vivo en ${ciudad}, ${pais}. Soy un ${trabajo}.`;
console.log(personaInfoDos);
console.log(personaInfoTres);

// Es lo mismo pero yo prefirero ponerlo de la 2 forma para poder, y tampoco es tan dificil de poner (con una ${}).

