console.log("Sesion JS06");

// función definida
function findElementByIdFnc01(/*parametros*/) {
  /* instrucciones */
  return 3 * 4;
}

// función expresada
const findElementByIdFnc02 = function (/*parámetros*/) {
  return 3 * 4;
};

const findElementByIdFnc03 = (/*parámetros*/) => {
  return 3 * 4;
};

const findElementByIdFnc04 = () => 3 * 4;

const findElementByIdFnc05 = (variableParametro) => 3 * 4;

const findElementById = (nameOfDeveloper) => {
  const tituloRef = document.getElementById("titulo");

  //tituloRef.innerHTML = tituloRef.innerHTML + nameOfDeveloper;
  tituloRef.innerHTML += nameOfDeveloper;
};
findElementById(", Sergio");

const changeSubtitleById = (newTxt) => {
  const subtitleRef = document.getElementById("subtitulo");

  subtitleRef.innerHTML = ` ${subtitleRef.innerText}, <em>${newTxt}</em>`;
};
changeSubtitleById("viernes de cholos");

//------------ Encontrar elementos por su tag ----------------------------------
// getElementsByTagName()

const changeEmphasis = (newTxt, url) => {
  const emphasisRef = document.getElementsByTagName("em");
  //console.log(emphasisRef);
  for (element of emphasisRef) {
    console.log(element);
    element.innerHTML = `<a href="${url}" target="_blank"> ${newTxt} </a> `;
  }
};

changeEmphasis("viernes friki", "https://frikishop.com.mx/");
changeEmphasis(
  "viernes de cholo",
  "https://www.etsy.com/mx/market/cholo_style"
);

// ------------ Selector universal --------------------------------
// querySelector

const findElementByQuerySelector = () => {
  const refElements = document.querySelector("p em");
  refElements.innerHTML = `La Ch 26 es bien <strong>chida</strong> y les gusta el 11:11`;
};
findElementByQuerySelector();

// -------------- Crear nuevo elemento ----------------------------
// appendChild

const newElement = () => {
  const newElementRef = document.createElement("p"); // <p> </p>

  newElementRef.innerHTML = ` La Ch 26 le gusta:
    <ul>
        <li>El pan de muerto</li>
        <li>El chismesito</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>El pulque</li>  
    </ul>
    `;
  const articleRef = document.querySelector("article");
  articleRef.appendChild(newElementRef); // Se agrega el nuevo elemento
  // Clonar el nodo anterior
  // const nodoClonado = articleRef.cloneNode( true );
  // document.querySelector("#article-news").appendChild( nodoClonado );
};

newElement();

const colorArray = ["blue", "green", "red"];
const changeColor = (color) => {
  const refIntro = document.getElementById("noticias");
  refIntro.style.color = color;
};

changeColor("red");

function changeBorderColor(color) {
  const borderToChange = document.querySelector("h1");
  borderToChange.style.border = `dashed 3px ${color}`;
}

changeBorderColor("black");

const quitarBoton = () => {
  const buttonRef = document.getElementById("button-e");
  buttonRef.style.display = "none"; // quitar elemento
};

const ocultarBoton = () => {
  const buttonRef = document.getElementById("button-f");
  buttonRef.style.visibility = "hidden"; // ocultar elemento
};

const getButton = () => {
  const buttonRef1 = document.getElementById("button-f");
  buttonRef1.style.visibility = "visible";
  const buttonRef2 = document.getElementById("button-e");
  buttonRef2.style.display = "";
};
