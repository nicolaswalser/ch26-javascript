console.log("JS07 Api Fetch");

/*
Api Fetch helps us to access and manipulate HTTP petitions. It provides
a logical and easy way of obtaining resources from the web in a asyc manner.

Syntax:
  Solicitud get

  fetch(url)
    .then(response => {})
    .catch(error => {});
*/

const url = "https://fakestoreapi.com/products";

const getProducts = (url) => {
  fetch(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

getProducts(url);
