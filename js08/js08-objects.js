console.log("JS08 Objects");

// ----- Creating an object -----

const fruitColors = {
  apple: ["green", "red"],
  banana: ["yellow"],
  grape: ["purple", "green"],
  mango: ["orange"],
  strawberry: ["red"],
};

console.log("The apple is " + fruitColors.apple.join("-")); // join properities with .join

fruitColors.mango.push("blue"); // and property to array

console.log(fruitColors.mango);

fruitColors.mango[1] = "green"; // replace property in array

console.log(fruitColors.mango);

console.log(fruitColors.grape.indexOf("green")); // find index of property

// Iterating objects

for (let fruit in fruitColors) {
  console.log(
    `${fruit} has the color(s) of ${fruitColors[fruit].join(" and ")}`
  );
}

// Use of symbol

const hideSpouse = Symbol();

const employerData = {
  name: "Jim Halpert",
  age: "32",
  sex: "male",
  [hideSpouse]: "Pam Beasily",
  complexion: "fair",
};

for (let data in employerData) {
  console.log(`${data}: ${employerData[data]}`);
}

// localStorage.setItem("employer-data", JSON.stringify(employerData));
sessionStorage.setItem("employer-data", JSON.stringify(employerData));

// Car

const car = {
  color: "black",
  type: "sedan",
  brand: "Hyundai",
  price: 250_000,
  igniteEngine: (state) => (state ? "Engine is on." : "Engine is off."),
};

console.log(car.igniteEngine(false));

const car2 = {
  color: "white",
  type: "van",
  brand: "Honda",
  price: 350_000,
  igniteEngine: (state) => (state ? "Engine is on." : "Engine is off."),
};

console.log(car2.igniteEngine(true));

// Creating Protoypes
