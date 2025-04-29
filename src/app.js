import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCard() {
  //write your code here
  let arrayPalos = ["♦", "♥", "♠", "♣"];
  let arrayNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let paloSelected = getRandomElement(arrayPalos);
  let numberSelected = getRandomElement(arrayNumbers);
  let color = "";

  if (paloSelected == "♦" || paloSelected == "♥") {
    color = "red";
  }
  else {
    color = "black";
  }

  let paloSup = document.getElementById("palo-superior");
  paloSup.style.color = color;
  paloSup.innerText = paloSelected;

  let paloInf = document.getElementById("palo-inferior");
  paloInf.style.color = color;
  paloInf.innerText = paloSelected

  document.getElementById("numero").innerText = numberSelected;

  //console.log("Hello Rigo from the console!");

};

let counterActive

function temporizado() {
  console.log(counterActive);

  if (counterActive) {
    clearInterval(counterActive)
  }
  counterActive = setInterval(generateCard, 1000)
}

function detener() {
  clearInterval(counterActive)
}


window.onload = generateCard
let boton = document.getElementById("generateButton");
boton.addEventListener("click", generateCard);

let startButton = document.getElementById("startButtonCounter");
startButton.addEventListener("click", temporizado);

let stopButton = document.getElementById("stopButtonCounter")
stopButton.addEventListener("click", detener)

//window.setTimeout(generateCard, 5000);

