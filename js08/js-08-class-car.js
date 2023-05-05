export class Car {
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

export class ElectricCar extends Car {
  constructor(color, type, brand, price, battery) {
    super(color, type, brand, price);
    this.battery = battery;
  }

  setSelfDrive(state) {
    return state ? "Self Driving on" : "Self Drivin off";
  }
  describeCar() {
    return `This ${this.brand} is ${this.color}, costs ${this.price}, has a ${this.battery} battery and is a ${this.type}`;
  }
  igniteEngine(state) {
    return state ? "Engine is on" : "Engine is off";
  }
}
