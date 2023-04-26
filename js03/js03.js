console.log("JS03 Session");

// ------------- Block Declaration -------------
/*
Las variables declaradas con let y const solo 
tendran alcance (scope) dentro del bloque
o bloques anidados.

{
  bloque anidado
  si una vriable local tiene el mismo
  nombre de una variable global o de bloque
  superior, la variable local oculta las otras
  variables, para que la variable local sea usada

}

*/
{
  let name = "Nick";
  const surname = "Walser";
  let ageNick = 25,
    ageSergio = 39;
  let numCohortNick = 26;
  let numCohortSergio = 26;

  {
    let name = "Sergio";
    const surname = "Torres";
    console.log(`My name is ${name} ${surname}`);
    console.log(`Nick: ${ageNick} years`);
    console.log(`Sergio: ${ageSergio} years`);
    console.log(`Cohort Nick: ${numCohortNick}`);
    console.log(`Cohort Sergio: ${numCohortSergio}`);
  }
  console.log(`My name is ${name} ${surname}`);
  console.log(`Nick: ${ageNick} years`);
  console.log(`Sergio: ${ageSergio} years`);
  console.log(`Cohort Nick: ${numCohortNick}`);
  console.log(`Cohort Sergio: ${numCohortSergio}`);
}
// console.log(`My name is ${name} ${surname}`);
// console.log(`Nick: ${ageNick} years`);
// console.log(`Sergio: ${ageSergio} years`);

// ------------- Conditional If-Else -------------
/*
  If executes a code if a condition is avaluated as true.
  
  syntax:
    if (condition) instruction;

    if (condition){
    instructions;
    }

          or
    
    if (condition) instruction;
    else instruction;

    if (condition){
    instructions;
    }
    else {
      instructions;
    }

    if (condition){
    instructions;
    } else if (condition2) {
      instructions;
    } else if (condition3) {
      instructions;
    } else if (condition4) {
      instructions;
    } else {
    instructions;
    }
*/

const temp = 19;
let message;

if (temp > 22) message = "Its warm out";
else if (temp < 22 && temp > 18) message = "Ideal temp";
else if (temp < 18) message = "Get your coat";

// prompt(message);

// ------------- Exercise -------------
/*
    Ask for a number of month from 1 - 12
    According to month, alert("Season")

    12, 1, 2 = Winter
    3, 4, 5 = Spring
    6, 7, 8 = Summer
    9, 10, 11 = Autumn

    Use if-else

*/
const getSeason = () => {
  const month = parseInt(document.getElementById("month").value);

  if (month === 12 || month === 1 || month === 2) {
    alert("Winter");
  } else if (month === 3 || month === 4 || month === 5) {
    alert("Spring");
  } else if (month === 6 || month === 7 || month === 8) {
    alert("Summer");
  } else if (month === 9 || month === 10 || month === 11) {
    alert("Autumn");
  } else {
    alert("Invalid month number");
  }
};

// ------------- Switch -------------
// Evaluates an expression and it compares with
// the value of every case. It executes until it
// encounters break.

/*
  Syntax:
    switch (expression){
    case value:
      instruction;
      break;
    case value1:
      instruction;
      break;
    case value2:
      instruction;
      break;
    default:
      instruction;
    }
*/

const setFanSpeed = (speed) => {
  let msg;
  switch (speed) {
    case 0:
      msg = "Off";
      break;
    case 1:
      msg = "Slow";
      break;
    case 2:
      msg = "Medium";
      break;
    case 3:
      msg = "Fast";
      break;
    case 4:
    case 5:
      msg = "Fast+";
      break;
    default:
      msg = "Does not exist";
  }
  return msg;
};

console.log(`Fan speed is: ${setFanSpeed(5)}`);

// ------------- Exercise -------------
// Redo the previous exercise with Swtich

const getWeekdayByNumber = () => {
  const week = parseInt(document.getElementById("week").value);

  switch (week) {
    case 1:
      alert("Monday");
      break;
    case 2:
      alert("Tuesday");
      break;
    case 3:
      alert("Wednesday");
      break;
    case 4:
      alert("Thursday");
      break;
    case 5:
      alert("Friday");
      break;
    case 6:
      alert("Saturday");
      break;
    case 7:
      alert("Sunday");
      break;
    default:
      alert("Invalid weekday number");
  }
};

// ------------- Conditional operator Ternary -------------
/*
  The only operator of JavaScript that has 3 operators.
  Generally used as an option in if-else instructions.

  Syntax:
    
    condition ? expressionIfTrue : expressionIfFalse;

*/

const payCreditCard = true;
const subtotal = 1000;

console.log(
  `Total amount is ${payCreditCard ? subtotal * 1.025 : subtotal * 1} MXN`
);

const age = 17;
console.log(`Access ${age >= 18 ? "Permiited" : "Denied"} `);

console.log(
  `Access ${
    age >= 18
      ? "Permiited"
      : age === 17
      ? "Permitted with Permission"
      : "Denied"
  } `
);

// ------------- Exercise -------------
//
/*
  const printHello = (num) => {
    if (num > 10) {
      return;
    }
    console.log(`Hello ${num}`);
    printHello(num + 1);
  };

  printHello(1);
*/

const printHello = (num) => {
  num > 10 ? undefined : console.log(`Hello ${num}`) + printHello(num + 1);
};

printHello(1);
