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
