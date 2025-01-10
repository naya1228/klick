const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const screen = document.querySelector(".screen");
const bubble = document.querySelector("#bubble");

function moveBubble() {
	const sR = screen.getBoundingClientRect();
	const x = Math.random() * (sR.innerWidth - bubble.offsetWidth);
	const y = Math.random() * (sR.innerHeight - bubble.offsetHeight);
	bubble.style.transform = `translate(${x}px, ${y}px)`;
	console.log("Bubble moved");
}

setInterval(moveBubble, 1000);
