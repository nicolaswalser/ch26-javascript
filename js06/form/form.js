console.log("JS06-Form Session");

const refForm = document.forms["register"];

function myFunctionCallback() {}

refForm.addEventListener("submit", (event) => {
  event.preventDefault(); // by default emits renewing the page
  // console.log(event);

  // Create object with the data of the form
  const email = refForm.elements["inputEmail4"];
  const password = refForm.elements["inputPassword4"];
  const address = refForm.elements["inputAddress"];
  const city = refForm.elements["inputCity"];
  const state = refForm.elements["inputState"];
  const zip = refForm.elements["inputZip"];
  const check = refForm.elements["gridCheck"];

  // Create object with the data of the form
  user = {
    email: email.value,
    password: password.value,
    address: address.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
    checkbox: check.checked,
  };

  console.log(user);
});
