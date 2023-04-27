console.log("JS04 Session");
// ------------- Arrays and Cicles -------------

/*

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

while (condition) {
  
}

*/

// Declar an Array
const namesCh26 = ["Nick", "Mayra", "Siri", "Alex", "David"];

namesCh26.push("Steve");

console.log(namesCh26);

// 2 Dimensional Arrays
// [ [], [] , [] ]

const dogBreedsBySize = [
  /*Small*/ ["Chihuahua", "French Poodle", "Pug"],
  /*Medium*/ ["Collie", "Boxer", "Bulldog"],
  /*Large*/ ["Labrador", "Mastif", "German Shepherd"],
];

console.log(`Dog breeds by size - Small: ${dogBreedsBySize[0].join(", ")}`); // since you are concatinating a string with an array
console.log(`Dog breeds by size - Medium: ${dogBreedsBySize[1].join(", ")}`); // the elements will show as string and therefore not have space
console.log(`Dog breeds by size - Large: ${dogBreedsBySize[2].join(", ")}`); // between them. Use .join(", ") to add comma and space,

console.log(`dogBreedsBySize[1][1] is: ${dogBreedsBySize[1][1]}`);
console.log(`"Mastif" in Array: ${dogBreedsBySize[2].indexOf("Mastif")}`);

dogBreedsBySize[1][0] = "Poodle";
console.log(`Dog breeds by size - Medium: ${dogBreedsBySize[1].join(", ")}`); // Replaced Collie with Poodle

// Iterate all elements of an array of 2 dimensions
/*
  for (let row = 0; row < dogBreedsBySize.length; row++) {
    console.log(`Index ${row}: ${dogBreedsBySize[row]}`);
    for (let column = 0; column < dogBreedsBySize[row].length; column++) {
      console.log(`Name: ${column}: ${dogBreedsBySize[row][column]}`);
    }
  }
*/

// Using forEach

dogBreedsBySize.forEach((row) => row.forEach((column) => console.log(column)));

// Using forOf
// Executes instructions for each element

const myName = "Nick";
for (let char of myName) {
  console.log(char);
}

for (let row of dogBreedsBySize) {
  for (let column of row) {
    console.log(column);
  }
}

// ------------- Considerations for the forLoop -------------
// Not necessary to indicate the start, the comparison and final expression
/*
  Syntax:
    for (start; comparison; finalExpression) {
  instructions;
}
*/

// let nIteration = 0;
// for (;;) {
//   console.log(nIteration);
//   if (nIteration === 5) break;
//   nIteration++;
// }

// ------------- Exercise -------------
// Iterate until reaching "Mastif"

for (fila of dogBreedsBySize) {
  for (columna of fila) {
    console.log(columna);
    if (columna == "Mastif") break;
  }
  if (columna == "Mastif") break;
}

// Continue
// In JavaScript, the continue statement is used
// inside loops to skip the current iteration
// and move on to the next iteration.

console.log("---------Using Continue---------");

for (fila of dogBreedsBySize) {
  for (columna of fila) {
    if (columna !== "Boxer" && columna !== "Poodle") {
      const concatination = "Dog " + columna;
      console.log(concatination);
    }
  }
}

// ------------- While -------------
/*
  Syntax:
    while(){
    instructions;
    }

*/
// let counter = 0;
// while (confirm("Want to continue?")) {
//   console.log(
//     `You've continued ${++counter} ${counter <= 1 ? "time" : "times"}`
//   );
// }

const numbers = [9, 5, 6, 7];

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// ------------- Practice -------------

function guessNumber() {
  let min = 1;
  let max = 10;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    let answer = confirm(
      "Is your number between " + min + " and " + guess + "?"
    );

    if (answer) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
  }

  alert("Your number is " + min);
}

// ------------- do While -------------

/*
  Syntax:

    do{
      instructions;
    } while( );

*/

let value = 3;

do {
  console.log("Do-While" + value);
  value++;
} while (value < 5);
