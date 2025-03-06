const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const screen = main.querySelector(".screen");
const bubble = document.querySelector("#bubble");
const ul = screen.querySelector("ul");
const startBtn = ul.getElementById("startBtn");
const restartBtn = ul.getElementById("restartBtn");
restartBtn.parentElement.hidden = true;

let playtime = 300;

function StartGame(event) {
	startBtn.parentElement.hidden = true;
	restartBtn.parentElement.hidden = false;
}





startBtn.addEventListener("click", StartGame);

resizeScreen();
function resizeScreen() {
	screen.style.width = `${window.innerWidth * 0.6}px`;
	screen.style.height = `${window.innerHeight * 0.8}px`;
}

window.addEventListener("resize", resizeScreen);
