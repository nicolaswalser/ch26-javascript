const myBoolean = true;
const myString = "hello world";
let firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
const myArray = [myBoolean, myString];
const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber,
};
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);

const objectVariable = {
  property1: "i am property 1",
  proeprty2: "i am property 2",
  property3: [20, 30, 40],
};
console.log(objectVariable.property3[2]);
