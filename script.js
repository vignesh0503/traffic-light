let stopL = document.getElementById("stopLight");
let readyL = document.getElementById("readyLight");
let goL = document.getElementById("goLight");
let stopB = document.getElementById("stopButton");
let readyB = document.getElementById("readyButton");
let goB = document.getElementById("goButton");

function sB() {
  stopL.style.backgroundColor = "#cf1124";
  readyL.style.backgroundColor = "#4b5069";
  goL.style.backgroundColor = "#4b5069";
  stopB.style.backgroundColor = "#cf1124";
  readyB.style.backgroundColor = "#1f1d41";
  goB.style.backgroundColor = "#1f1d41";
}

function rB() {
  stopL.style.backgroundColor = "#4b5069";
  readyL.style.backgroundColor = "#f7c948";
  goL.style.backgroundColor = "#4b5069";
  stopB.style.backgroundColor = "#1f1d41";
  readyB.style.backgroundColor = "#f7c948";
  goB.style.backgroundColor = "#1f1d41";
}

function gB() {
  stopL.style.backgroundColor = "#4b5069";
  readyL.style.backgroundColor = "#4b5069";
  goL.style.backgroundColor = "#199473";
  stopB.style.backgroundColor = "#1f1d41";
  readyB.style.backgroundColor = "#1f1d41";
  goB.style.backgroundColor = "#199473";
}
