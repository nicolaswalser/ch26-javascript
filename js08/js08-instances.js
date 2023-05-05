import { Car, ElectricCar } from "./js-08-class-car.js";

// Nicks Car Obj

const nicksCar = new Car("black", "sedan", "Hyundai", 250_000);
console.log(nicksCar);
console.log("Price of Nicks Car: ", nicksCar.price);
console.log(nicksCar.igniteEngine(false)); // Engine is off.
console.log(nicksCar.describeCar());

// Michelles Car Obj

const michellesCar = new Car("blue", "SUV", "Nissan", 350_000);
console.log(michellesCar);
console.log(michellesCar.color);
console.log(michellesCar.igniteEngine(true)); // Engine is on.
console.log(michellesCar.describeCar());

// Elons Car Obj

const elonCar = new ElectricCar(
  "silver",
  "Sedan",
  "Tesla",
  550_000,
  "100Volts"
);
console.log(elonCar);
console.log(elonCar.setSelfDrive(false)); // Self drive off
console.log(elonCar.describeCar());
