# 30diasconJavaScript

Tengo que aprender perfectamente javascript, pero me he ido de vacaciones y eso conlleva a no poder leerme la intoducción para apredender JS

<!-- <!DOCTYPE html>
<html>
    <head>
     <title>30DíasDeJS:Scripts Internos</title>
    </head>
    <body>
    <button onclick="alert('Bienvenido a 30DaysOfJavaScript!');">Click Me</button>
    <script>
        console.log("Bienvenido a 30DaysOfJavaScript!");
    </script>
    </body>
</html>
 -->

Estas lineas de codigo hace que aparezca un botón que genera una ventana en el centro de la página web, y que te da información sobre algo que quieras poner.

<!-- console.log(2 + 3) // Adición
console.log(3 - 2) // Sustracción
console.log(2 * 3) // Multiplicación
console.log(3 / 2) // División
console.log(3 % 2) // Módulo - encontrar el resto
console.log(3 ** 2) // Exponencial
 -->

Estas lineas de código hace que puedas multiplicar, dividir ,sumar y restar en una consola.

<!--
let usuarioUno = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

let usuarioDos = {
  nombre: "Asabeneh",
  papel: "teaching",                            .
  pais: "Finland",
};

console.log(usuarioUno == usuarioDos); // Falso
 -->
Tenemos varios tipos de variables, una de ellas es la variable no primitiva, que hacen que se puedan variar en todo momento, como por ejemplo (LET). 
Otra cosa es que el let + el nombre que le queremos dar, permite que podamos dar una variable, como el ejemplo de arriba (let + usuariouno(nombre)), que nos especifica el nombre, el papel y el pais.

<!-- let edad = 35;
const gravedad = 9.81; // usamos const para valores que no cambian, constante gravitacional en m/s2
let masa = 72; // masa en Kilogramo
const PI = 3.14; // pi una constante geométrica

// Más ejemplos
const boilingPoint = 100; // temperatura en oC, punto de ebullición del agua que es una constante
const bodyTemp = 37; // oC la temperatura corporal promedio del ser humano, que es una constante

console.log(edad, gravedad, masa, PI, boilingPoint, bodyTemp);
 -->
Antes habiamos hablado sobre los datos no primitivos(LET (se puede cambiar en todo momento)), ahora vamos a hablar sobre los datos primitivos que hacen que se pueda poner una variable, la cual no se pueda cambiar. Arriba tenemos un ejemplo, se llama const, que significa constante, y es algo que siempre va tener la misma variable, numero, objeto etc...

<!-- const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Redondeo al número más cercano
// si es superior a 0,5 hacia arriba si es inferior a 0,5 redondeo hacia abajo

console.log(Math.round(PI)); // 3 para redondear valores al número más cercano

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 redondeando hacia abajo

console.log(Math.ceil(PI)); // 4 redondeando hacia arriba

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, devuelve el valor mínimo

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, devuelve el valor máximo

const randNum = Math.random(); // crea un número aleatorio entre 0 y 0,999999
console.log(randNum);

// Vamos a crear un número aleatorio entre 0 y 10

const num = Math.floor(Math.random() * 11); // crea un número aleatorio entre 0 y 10
console.log(num);

//Valor absoluto
console.log(Math.abs(-10)); // 10

//Raíz cuadrada
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Poder
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logaritmo
// Devuelve el logaritmo natural con base E de x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Devuelve el logaritmo natural de 2 y 10 respectivamente
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometría
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
 -->
Lo siguiente son varios comandos para redondear (hacia arriba o hacia abajo), devolver minimos o máximosy mas comandos utiles para poder trabajr bien con js. 

<!--  const parrafo =
  "Mi nombre es Asabeneh Yetayeh. Vivo en Finlandia, Helsinki.\
Soy profesora y me encanta enseñar. Enseño HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis y D3.js para cualquier persona interesada en aprender. \
A fines de 2019, estaba pensando en expandir mi enseñanza y llegar a \
a la audiencia global y comencé un desafío de Python del 20 de noviembre al 19 de diciembre.\
Fue una de las experiencias más gratificantes e inspiradoras.\
Ahora, estamos en 2020. Disfruto preparando el desafío 30DaysOfJavaScript y \
Espero que tú también estés disfrutando.";

console.log(parrafo);
--> 
Luego tenemos una etiqueta que sirve para escribir un parrafo en la consola.

