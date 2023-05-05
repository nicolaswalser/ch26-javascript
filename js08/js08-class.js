console.log("JS08 Class Session");

// Creating a class Obj for sub Objs

class Car {
  constructor(color, type, brand, price) {
    this.color = color;
    this.type = type;
    this.brand = brand;
    this.price = price;
  }

  igniteEngine(state) {
    return state ? "Engine is on." : "Engine is off.";
  }
}

const nicksCar = new Car("black", "sedan", "Hyundai", 250_000);
console.log(car.igniteEngine(false)); // Output: Engine is off.

const michellesCar = new Car("blue", "SUV", "Nissan", 350_000);
console.log(car2.igniteEngine(true)); // Output: Engine is on.
