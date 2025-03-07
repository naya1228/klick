const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const screen = main.querySelector(".screen");
const ul = main.querySelector("ul");
const startBtn = ul.querySelector("#startBtn");
const restartBtn = ul.querySelector("#restartBtn");

function resizeScreen() {
	let SH = window.innerHeight * 0.6;
	let SW = window.innerWidth * 0.8;
	if (SH > SW) {
		screen.style.width = `${SW}px`;
		screen.style.height = `${(SW / 4) * 3}px`;
	} else if (SW >= SH) {
		screen.style.width = `${(SH / 3) * 4}px`;
		screen.style.height = `${SH}px`;
	}
}

window.addEventListener("resize", resizeScreen);
