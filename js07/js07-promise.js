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
