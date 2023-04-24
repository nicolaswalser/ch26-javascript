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
