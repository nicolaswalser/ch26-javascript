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
    return state ? "Engine is on" : "Engine is off";
  }
  describeCar() {
    return `This ${this.brand} is ${this.color}, costs ${this.price} and is a ${this.type}`;
  }
}

const nicksCar = new Car("black", "sedan", "Hyundai", 250_000);
console.log(nicksCar);
console.log("Price of Nicks Car: ", nicksCar.price);
console.log(nicksCar.igniteEngine(false)); // Engine is off.
console.log(nicksCar.describeCar());

const michellesCar = new Car("blue", "SUV", "Nissan", 350_000);
console.log(michellesCar.color);
console.log(michellesCar.igniteEngine(true)); // Engine is on.
console.log(michellesCar.describeCar());
