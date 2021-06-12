import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("ordenarCartas").disabled = true;
};

let los2Arr = [];

var btnClick = document.querySelector("#generar");

btnClick.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("generar").disabled = true;
  document.getElementById("ordenarCartas").disabled = false;

  let cantidadDeCartas = document.querySelector("#cantidadDeCartasInput").value;
  let z = 0;
  if (cantidadDeCartas !== "" && cantidadDeCartas <= 10) {
    for (let i = 0; i < cantidadDeCartas; i++) {
      var iconoSuperior = document.createElement("div");
      iconoSuperior.classList.add("icono1");
      var parrafoSup = document.createElement("p");
      parrafoSup.setAttribute("id", "iconoNum1");

      iconoSuperior.append(parrafoSup);

      var numeroCentroDiv = document.createElement("div");
      numeroCentroDiv.classList.add("num");
      var parrafoMedio = document.createElement("p");
      parrafoMedio.setAttribute("id", "numero");

      numeroCentroDiv.append(parrafoMedio);

      var iconoInferior = document.createElement("div");
      iconoInferior.classList.add("icono2");
      var parrafoBajo = document.createElement("p");
      parrafoBajo.setAttribute("id", "iconoNum2");

      iconoInferior.append(parrafoBajo);

      var carta = document.createElement("div");
      carta.classList.add("carta");

      carta.append(iconoSuperior);
      carta.append(numeroCentroDiv);
      carta.append(iconoInferior);

      var contenedorAdd = document.querySelector("#contenedorAdd");
      contenedorAdd.append(carta);

      let iconos = ["♦", "♥", "♠", "♣"];

      let simbolo = ["J", "Q", "K", "Ⓐ", 2, 3, 4, 5, 6, 7, 8, 9, 10];

      let numDelIconoInicial = -1;
      while (numDelIconoInicial === -1 || numDelIconoInicial === 4) {
        numDelIconoInicial = Math.floor(Math.random() * (5 - 1) - 1);
      }

      let numIconoCentro = -1;
      while (numIconoCentro === -1 || numIconoCentro === 12) {
        numIconoCentro = Math.floor(Math.random() * (13 - 1) - 1);
      }

      if (
        iconos[numDelIconoInicial] == "♦" ||
        iconos[numDelIconoInicial] == "♥"
      ) {
        iconoSuperior.style.color = "red";
        iconoInferior.style.color = "red";
      }

      iconoSuperior.append(iconos[numDelIconoInicial]);
      numeroCentroDiv.append(simbolo[numIconoCentro]);
      iconoInferior.append(iconos[numDelIconoInicial]);

      los2Arr[z] = [simbolo[numIconoCentro], iconos[numDelIconoInicial]];
      z++;
    }
  }

  console.log("array original");
  console.log(los2Arr);
});

var ordenarCartas = document.querySelector("#ordenarCartas");

ordenarCartas.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("generar").disabled = false;
  document.getElementById("ordenarCartas").disabled = true;

  let arrayOrdenado = [];
  arrayOrdenado = bubbleSort(los2Arr);

  for (let i = 0; i < arrayOrdenado.length; i++) {
    var iconoSuperior = document.createElement("div");
    iconoSuperior.classList.add("icono1");
    var parrafoSup = document.createElement("p");
    parrafoSup.setAttribute("id", "iconoNum1");

    iconoSuperior.append(parrafoSup);

    var numeroCentroDiv = document.createElement("div");
    numeroCentroDiv.classList.add("num");
    var parrafoMedio = document.createElement("p");
    parrafoMedio.setAttribute("id", "numero");

    numeroCentroDiv.append(parrafoMedio);

    var iconoInferior = document.createElement("div");
    iconoInferior.classList.add("icono2");
    var parrafoBajo = document.createElement("p");
    parrafoBajo.setAttribute("id", "iconoNum2");

    iconoInferior.append(parrafoBajo);

    var carta = document.createElement("div");
    carta.classList.add("carta");

    carta.append(iconoSuperior);
    carta.append(numeroCentroDiv);
    carta.append(iconoInferior);

    var contenedorAdd = document.querySelector("#CartasOrdenadas");
    contenedorAdd.append(carta);

    if (arrayOrdenado[i][1] == "♦" || arrayOrdenado[i][1] == "♥") {
      iconoSuperior.style.color = "red";
      iconoInferior.style.color = "red";
    }
    iconoSuperior.append(arrayOrdenado[i][1]);
    numeroCentroDiv.append(arrayOrdenado[i][0]);
    iconoInferior.append(arrayOrdenado[i][1]);
  }
});

const selectElement = document.querySelector("#ordenadorSeleID");
selectElement.addEventListener("change", event => {
  let arrayOrdenado = [];
  arrayOrdenado = selectSort(los2Arr);

  for (let i = 0; i < arrayOrdenado.length; i++) {
    var iconoSuperior = document.createElement("div");
    iconoSuperior.classList.add("icono1");
    var parrafoSup = document.createElement("p");
    parrafoSup.setAttribute("id", "iconoNum1");

    iconoSuperior.append(parrafoSup);

    var numeroCentroDiv = document.createElement("div");
    numeroCentroDiv.classList.add("num");
    var parrafoMedio = document.createElement("p");
    parrafoMedio.setAttribute("id", "numero");

    numeroCentroDiv.append(parrafoMedio);

    var iconoInferior = document.createElement("div");
    iconoInferior.classList.add("icono2");
    var parrafoBajo = document.createElement("p");
    parrafoBajo.setAttribute("id", "iconoNum2");

    iconoInferior.append(parrafoBajo);

    var carta = document.createElement("div");
    carta.classList.add("carta");

    carta.append(iconoSuperior);
    carta.append(numeroCentroDiv);
    carta.append(iconoInferior);

    var contenedorAdd = document.querySelector("#CartasOrdenadas");
    contenedorAdd.append(carta);

    if (arrayOrdenado[i][1] == "♦" || arrayOrdenado[i][1] == "♥") {
      iconoSuperior.style.color = "red";
      iconoInferior.style.color = "red";
    }
    iconoSuperior.append(arrayOrdenado[i][1]);
    numeroCentroDiv.append(arrayOrdenado[i][0]);
    iconoInferior.append(arrayOrdenado[i][1]);
  }
});

const bubbleSort = arr => {
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--;
  }
  return arr;
};

const selectSort = arr => {
  let min = 0;

  while (min < arr.length) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
  }
  return arr;
};
