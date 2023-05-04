console.log("JS07-Promise");
/*
A promise is an object that represents the termination or failure
of an asynch operator.

Syntax:
new Promise( callbackFnc )
*/

const pinkyPromise = new Promise((resolve, reject) => {
  const minor = false;
  if (minor) {
    resolve("Lets get married");
  } else {
    reject("Lets get a divorce");
  }
});

// Consume promises
// using the functino then, catch and finally

console.log("Before consuiming the promise");

// pinkyPromise.then(callbackFnc)
// pinklypromise.then(callbackFnc).catch();
pinkyPromise
  .then((response) => console.log("Promise resolved: " + response))
  .catch((error) => console.error("Promise rejected: " + error));

console.log("After consuiming the promise");

// ------------------------
// Promise that receives two numbers, a and b and divdes them.
// if b is 0, catch reject stating why operation cant be resolved (division)

const division = new Promise((resolve, reject) => {
  const a = 10;
  const b = 2;

  if (b > 0) {
    resolve(a / b);
  } else {
    reject("Cant divide by 0");
  }
});

division
  .then((response) =>
    console.log("Promise resolved, the division is: " + response)
  )
  .catch((error) => console.error("Promise rejected: " + error));

// -----------Doing the above with parameters----------

const divisionWithParameters = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b > 0) {
      resolve(a / b);
    } else {
      reject("Cant divide by 0");
    }
  });
};

divisionWithParameters(3, 4)
  .then((response) => {
    console.log(response + 10);
  })
  .then((responsePlus10) => console.log(responsePlus10))
  .catch((error) => console.error(error))
  .finally(() => console.log("Division executed"));

divisionWithParameters(3, 0)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject)); // Cant divide by 0

// -----------Consume Promises with Async and Await----------

console.log("----Solving divisions----");
const solvingDivisionAsync = async () => {
  console.log(await divisionWithParameters(20, 5));
};

console.log("----Terminating divisions----");
solvingDivisionAsync();

// ---------------- Manejo de exepciones con try y catch

const manejoDeExepciones = async () => {
  console.log("----Resolviendo divisiones usando try y catch---->");
  try {
    const resultadoErroneo = await divisionConParametros(20, 0);
    console.log(resultadoErroneo);
  } catch (error) {
    console.log("Async-Wait" + error);
  }

  console.log("<----Terminando divisiones usando try y catch-----");
};

manejoDeExepciones();

// -----------------------------------------
// Promise.resolve();

const fastPromise = Promise.resolve(123);

// resolve with .then

fastPromise.then((number) => {
  console.log(`With .then: ${number}`);
  console.log(456);
});
// resolve with async-await

const resolvePromise = async () => {
  console.log("With await: " + (await fastPromise));
  console.log(789);
};

resolvePromise();
