console.log("Welcome to 30DaysOfJavaScript");

let randomNum = Math.random(); //  0 a 0.999
let numBtnZeroAndTen = randomNum * 11;

/*console.log(numBtnZeroAndTen); // esto da: min 0 y max 10.99*/

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

let nombreCompleto = primerNombre + espacio + apellido; // concatenación, fusionando dos cadenas juntas.
console.log(nombreCompleto);

