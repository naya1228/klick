const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const screen = main.querySelector("screen");
const bubble = document.querySelector("#bubble");
const sR = screen.getBoundingClientRect();


// function moveBubble(sR) {
// 	const x = Math.random() * (sR.width - bubble.offsetWidth);
// 	const y = Math.random() * (sR.height - bubble.offsetHeight);
// 	bubble.style.transform = `translate(${x}px, ${y}px)`;
// 	console.log(`Bubble moved to (${x}px, ${y}px)`);
// }

// setInterval(() => moveBubble(sR), 1000);
