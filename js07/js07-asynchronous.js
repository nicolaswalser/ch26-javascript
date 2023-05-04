// ----- Synchronous Program -----

const firstStep = () => {
  console.log("01 - Start to my JS07 program");
};

const secondStep = () => {
  console.log("02 - Developing my JS07 program");
};
const thirdStep = () => {
  console.log("03 - End to my JS07 program");
};

firstStep();
secondStep();
thirdStep();

// ----- Asynchronous Program -----
// setTimeout()
// Establish a timer that executes the function
// one the timer expires.

const developAsynch = (hello) => {
  console.log("Hello " + hello);
};

const secondStepAsynch = (hello) => {
  // setTimeout(developAsynch, 4000, hello);
  // setTimeout((helloRef) => console.log("Hi " + helloRef), 4000, hello);
  setTimeout(() => console.log("Hi " + hello), 4000);
};

console.log("-------------------------");
firstStep();
// setTimeout(developAsynch, 3000, "CH26");
secondStepAsynch("CH26 with 4s of Timer");
thirdStep();

// setInterval
// Execute with itteration a function with a fixed delayd timer in callback.
const secondStepWithInterval = (hello) => {
  setInterval(() => console.log("We are " + hello), 2000);
};

console.log("------------ setInterval ------------");
firstStep();
// secondStepWithInterval("CH26 yuppi");
thirdStep();

// ----- Start and Stop setInteval -----

const refStart = document.getElementById("start");
const refStop = document.getElementById("stop");
const refDate = document.getElementById("date");
let idInterval;
refStop.disabled = true;

const disableStart = () => {
  refStart.disabled = true;
  refStop.disabled = false;
};
const enableStart = () => {
  refStart.disabled = false;
  refStop.disabled = true;
};

// to start
refStart.addEventListener("click", (event) => {
  refDate.innerHTML = new Date().toLocaleString();
  idInterval = setInterval(() => {
    refDate.innerHTML = new Date().toLocaleString();
  }, 1000);
  disableStart();
});

// to stop
refStop.addEventListener("click", (event) => {
  clearInterval(idInterval);
  enableStart();
});
