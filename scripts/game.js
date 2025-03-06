const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const screen = main.querySelector(".screen");
const bubble = document.querySelector("#bubble");

bubble.style.width = `${screen.width}`

resizeScreen();
function resizeScreen(){
	screen.style.width = `${window.innerWidth * 0.6}px`;
	screen.style.height = `${window.innerHeight * 0.8}px`;
}

window.addEventListener("resize", resizeScreen);