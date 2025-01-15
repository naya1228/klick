const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const screen = document.querySelector(".screen");
const bubble = document.querySelector("#bubble");
const sR = screen.getBoundingClientRect();

bubble.style.transform = "translate(-50px, -50px)";

function moveBubble(sR) {
	const x = Math.random() * (sR.width - bubble.offsetWidth);
	const y = Math.random() * (sR.height - bubble.offsetHeight);
	bubble.style.transform = `translate(${x}px, ${y}px)`;
	console.log("Bubble moved");
}

setInterval(() => moveBubble(sR), 1000);
