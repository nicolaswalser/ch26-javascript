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
// * Represents a numerical value that 'number' is unable to represent if unsafe (large) *
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
  firstName: "Nicolas",
  lastName: "Walser",
  age: 25,
  male: true,
  favArtistByGenre: {
    country: "Chris Stapleton",
    rock: "Greta Van Fleet",
    rap: "Eminem",
    indie: "Matt Corby",
  },
  fullName: function fullname() {
    // return myData.firstName + " " + myData.lastName;
    // * not recommended because if myData changes its name, the function loses its location *
    return this.firstName + " " + this.lastName; // better
  },
};

const myFakeData = {
  // key: value;
  firstName: "Peter",
  lastName: "Pan",
  age: null,
  male: "Almost",
  favArtistByGenre: {
    country: "Nicolas Walser",
    rock: "Nick Walser",
    rap: "Nico Walser",
    indie: "Nicky Walser",
  },
  fullName: function fullname() {
    return this.firstName + " " + this.lastName; // 'this.' referes to a local object it can reach, wont reach myDatas attributes
  },
};
console.log("Complete Data: ", myData);
console.log("Age: ", myData.age);
console.log("Favorite Artists by Genre: ", myData.favArtistByGenre);
console.log("Favorite Artists by Genre: ", myData.favArtistByGenre.indie);
console.log("Full name: ", myData.fullName());

console.log("Complete Data: ", myFakeData);
console.log("Age: ", myFakeData.age);
console.log("Favorite Artists by Genre: ", myFakeData.favArtistByGenre);
console.log("Favorite Artists by Genre: ", myFakeData.favArtistByGenre.indie);
console.log("Full name: ", myFakeData.fullName());

// Array
// Stores different types of data, its first element is index 0

const songsMattCorby = [
  "Mainies",
  "My False",
  "Brother",
  "Resolution",
  { 2009: 5, 2011: 5, 2013: 7, 2016: 11, 2018: 11, 2023: 9 },
];
console.log("Favorite Song: " + songsMattCorby[0]);
console.log("Songs in 2016: " + songsMattCorby[4][2016]);

console.log("Total num of elements: ", songsMattCorby.length); // property
console.log("Contains 'Resolution': ", songsMattCorby.indexOf("Resolution")); // method

// -----------------------------------------------

// Data Conversion
