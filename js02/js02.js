console.log("JS02 Session");

// ----------- Declared Function -----------
// Function declaration, function statement
// A characteristic of a decalred function is that they have 'hoisting'

console.log("The result of 5 * 10 = " + multiply(5, 10)); // invokes the function

function multiply(a, b) {
  // function declared
  return a * b;
}
// * hoisting reflects that the order is reorganized in order to execute the function. *

console.log(divide(13, 4));
console.log(divide(-42, 8));
console.log(divide(85, 3));

function divide(a, b) {
  return a / b;
}

// ----------- Expressed Function -----------
// Are expressed witihin a variable
// Can be annonymous (no name)
// Do not have hoisting. Does not upload to memory until used

/*Syntax

const nameVar = function nameFunction(parameters) {
  instructions;
}

*/
// console.log(sum(9, 9)); cant place here as no hoisting is available

const sum = function sum(a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const expo = function (a, b) {
  return a ** b;
};

console.log(sum(9, 9));
console.log(sub(19, 9)); // placed at the end to follow order (no hoisting)
console.log(expo(9, 2));

// ----------- Self-Invoking Function -----------
// Can be defined with annonymous functions

(function () {
  console.log("Im self-invoked");
})();
// Syntax is having the function in ( ) and at the end place ()

// ----------- Arrow Function -----------
// Similar to declared functions but:
// - does not require the word function
// - does not need {} if only one instruction
// - if one retur, does not need word return

/* 
const areaRectangle = function findRectangle(base, height) {
  return base * height;
 };

 normal declared function above*
*/

function areaRectangle(base, height) {
  return base * height;
}
console.log("Area of rectangle: " + areaRectangle(4, 2));

// ----------- Default Parameters -----------
/**
 * Documentation of the Funtion
 * @param {number} base description of the base
 * @param {number} height description of the height
 * @returns area of the triangle
 */

// const areaTriangle = (base, height) => (base * height) / 2;
const areaTriangle = (base = 1, height = 1) => (base * height) / 2;

console.log("Area of triangle: " + areaTriangle(5, 3));
console.log("Area of triangle: " + areaTriangle(7)); // results in NaN because 7 * undefined / 2 is NaN

// ----------- Rest Parameters -----------
// Syntax: ...nameParameter
// Allows us to represent a series of undifined values in the argument
// Presents itself as an Array
// End of the list of parameter

/**
 *
 * @param {number} a first parameter
 * @param {number} b second parameter
 * @param  {...number} rest the rest of them
 * @returns the sum of my complete parameters
 */

function sumNumbers(a, b, ...rest) {
  let sum;
  sum = a + b;
  for (let index = 0; index < rest.length; index++) {
    // will add the ...rest parameters one by one to the sum of a+b
    sum += rest[index];
  }

  return sum;
}

console.log("Sum of various numbers: ", sumNumbers(5, 6));
console.log("Sum of various numbers: ", sumNumbers(5, 6, 7, 8));
console.log("Sum of various numbers: ", sumNumbers(5, 6, 7, 8, 9, 10));

// ----------- CallBack Functions -----------
// Function that passes another function as an argument,
// to later be invoked

// 3 funciones, una que imprima en consola, alert, DOM h1.
// 1 parámetro de entrada.
// no tiene return.

// Función que imprime un mensaje en la consola
function printToConsole(mensaje) {
  console.log(mensaje);
}

// Función que muestra una alerta en la pantalla
function showAlert(mensaje) {
  alert(mensaje);
}

// Función que agrega un encabezado h1 al DOM
const addH1 = (mensaje) => {
  document.getElementById("div").innerHTML = `<h1>${mensaje}</h1>`;
};

function getNamePrintToConsole() {
  const name = prompt("Dime tu nombre");
  const text = `Hola ${name}, espero tengas un gran día`;
  printToConsole(text);
}
function getNamePrintToDOM() {
  const name = prompt("Dime tu nombre");
  const text = `Hola ${name}, espero tengas un gran día`;
  addH1(text);
}
// function getNameAndPrint(opcion) {
//   // Esta es la buena
//   const name = prompt("Dime tu nombre");
//   const text = `Hola ${name}, espero tengas un gran día`;
//   if (opcion === 1) printToConsole(text);
//   else if (opcion === 2) addH1(text);
//   else showAlert(text);
// }

// getNameAndPrint(1);
// getNameAndPrint(2);
// getNameAndPrint(3);

function getNameAndPrint(functionPrint) {
  // Esta es la buena
  const name = prompt("Tell me your name");
  const text = `Hi ${name}, have a nice day.`;
  functionPrint(text);
}

// getNameAndPrint(printToConsole);
// getNameAndPrint(addH1);
// getNameAndPrint(showAlert);

// --------------------------------------------
/*
  Excercise 2
  Describe a function that takes an array of numbers,
  duplicate the value of each number of the arry,
  print the new updated array.
  [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

function double(arr) {
  const doubleNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    const duplicate = arr[i] * 2;
    doubleNumbers.push(duplicate);
  }
  return doubleNumbers;
}
// A callback function using .map
const duplicate = (number) => number * 2;

function doubleWithMap(array) {
  const duplicateArray = array.map(duplicate);
  return duplicateArray;
}

const numbers = [5, 10, 15, 20, 25];
// console.log(double(numbers));
console.log(doubleWithMap(numbers));
