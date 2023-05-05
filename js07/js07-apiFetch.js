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
      console.log("Status: " + response.status);
      return response.json();
    })
    .then((productsObj) => {
      console.log(productsObj);
      // print only title
      const titles = productsObj.map((obj) => obj.title);
      console.log(titles);
    })
    .catch((error) => {
      console.log(error);
    });
};

// getProducts(url);

// consume Fetch using async - wait

const getProductsAwait = async (url) => {
  const getProductsJson = await fetch(url);
  const products = await getProductsJson.json();
  console.log(products);
  localStorage.setItem("My products: ", JSON.stringify(products));
  products.map((product) => {
    console.log(product.title);
  });
};

//getProductsAwait(url);

// -------- Post petition ----------

const postUser = (url, userData) => {
  fetch(url, {
    method: "POST", // 'PUT', 'DELETE'
    body: JSON.stringify(userData), // data of the user
    header: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((register) => console.log(register))
    .catch((error) => console.log(error));
};

const user = {
  name: "dracula",
  job: "leader",
};

const urlPost = "https://reqres.in/api/users";

postUser(urlPost, user);
