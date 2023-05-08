console.log("-----JS09 Axios-----");
const url = "https://reqres.in/api/users?page=2";
const urlPost = "https://reqres.in/api/users";
const data = {
  id: 7,
  email: "walsergomez@gmail.com",
  first_name: "Nicolas",
  last_name: "Walser",
  avatar: "",
};

// Fetch with .then/.catch
const getUsersFetch = () => {
  fetch(url)
    .then((response) => response.json())
    .then((users) => console.log(users.data))
    .catch((error) => console.log(error));
};

// Axios with .then/.catch
const getUsersAxios = () => {
  axios
    .get(url)
    .then((users) => console.log(users.data.data))
    .catch((error) => console.log(error));
};

// Axios with Async/Await
const getUsersAsyncAwait = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data.data);
  } catch (error) {
    let errorP = document.getElementById("errorP");
    errorP.innerText = `Error Encountered: ${error}`;
  }
};

// Axios Post
const postUsers = async () => {
  const response = await axios.post(urlPost, data);
  console.log(response);
};
