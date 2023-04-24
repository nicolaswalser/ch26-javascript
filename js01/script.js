console.log("JS Session 01");

// 7 primitive data

// String
// ex: "Hello"
console.log("Type of data 'String': ", "Hello");

// Number
// ex: 12, -45, 367.12, +Infinity, -Infinity, NaN
// * Numerical value uses 64 bits to store, but only 53 to represent the number *
console.log(
  "Type of data 'Number': ",
  12,
  -45,
  367.12,
  45 / 0,
  -45 / 0,
  56 * "Hi"
);
console.log("Max Value: ", Number.MAX_VALUE);
console.log("Safe Integer: ", Number.MAX_SAFE_INTEGER);

// BigInt
// * Represents a numerical value that 'number' is unable to represent if unsafe *
console.log("MAX_SAFE_INTEGER + 1: ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2: ", Number.MAX_SAFE_INTEGER + 2);
let myBigInt = 9007199254740991n; // Add 'n' at the end of number to represent as bigInt
console.log("Value of Data BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n: ", myBigInt + 1n);
console.log("MAX_SAFE_INTEGER + 2n: ", myBigInt + 2n); // Represents a Max Safe Integer using bigint 'n'

// Boolean
// ex: true or false
console.log("Type of data 'Boolean': ", true, false);
let male = true;
let female = false;
console.log("Am I a male: ", male);
console.log("Am I a female: ", female);

// Undefined
// Is declared, but not defined as a type
let myVar; // Variable was declared, but not yet defined. To define you have to '=' it to a type of data
console.log("Type of Data 'undefined': ", myVar);

// Null
//Intentially deletes the type of data
let myVarNull;
console.log("Type of data of myVarNull: ", typeof myVarNull); // undefined
myVarNull = "Hello world";
console.log("Type of data of myVarNull: ", typeof myVarNull); // string
myVarNull = null;
console.log("Type of data of myVarNull: ", typeof myVarNull); // presents as 'object' (due to JS error) but is 'null'
if (myVarNull == null) {
  console.log("myVarNull is null");
} // to check if 'null'
if (myVarNull === null) {
  console.log("myVarNull is null");
} // to check if strictly 'null'

// Symbol
// Creates private properties in objects

// -----------------------------------------------

// Type of data Object

// Object
const myData = {
  // key: value;
  firstName: "Nick",
  lastName: "Walser",
  age: 25,
  male: true,
  favArtistByGenre: {
    country: "Chris Stapleton",
    rock: "Greta Van Fleet",
    rap: "Eminem",
    indie: "Matt Corby",
  },
};
console.log("Complete Data: ", myData);
console.log("Age: ", myData.age);
console.log("Favorite Artists by Genre: ", myData.favArtistByGenre);
console.log("Favorite Artists by Genre: ", myData.favArtistByGenre.indie);
