const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const screen = main.querySelector(".screen");
const bubble = document.querySelector("#bubble");

setInterval(() => {
	screen.style.width = `${window.innerWidth-200}px`;
	screen.style.height = `${window.innerHeight-100}px`;
}, 1000);

// function moveBubble(sR) {
// 	const x = Math.random() * (sR.width - bubble.offsetWidth);
// 	const y = Math.random() * (sR.height - bubble.offsetHeight);
// 	bubble.style.transform = `translate(${x}px, ${y}px)`;
// 	console.log(`Bubble moved to (${x}px, ${y}px)`);
// }

// setInterval(() => moveBubble(sR), 1000);
