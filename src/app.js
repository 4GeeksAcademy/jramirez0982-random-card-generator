import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


window.onload = function () {
  //write your code here
  let arrayPalos = ["♦", "♥", "♠", "♣"];
  let arrayNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let paloSelected = getRandomElement(arrayPalos);
  let numberSelected = getRandomElement(arrayNumbers);
  let classSelected = "";

  if (paloSelected == "♦" || paloSelected == "♥") {
    classSelected = "heart-diamond";
  }
  else {
    classSelected = "spades-cube";
  }

  let paloSup = document.getElementById("palo-superior");
  paloSup.classList.add(classSelected);
  paloSup.innerText = paloSelected;

  let paloInf = document.getElementById("palo-inferior");
  paloInf.classList.add(classSelected);
  paloInf.innerText = paloSelected

  document.getElementById("numero").innerText = numberSelected;
  
  //console.log("Hello Rigo from the console!");

  
};
