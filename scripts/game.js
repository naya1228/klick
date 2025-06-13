const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const bubble = document.getElementById("bubble");
const scoreSpan = document.getElementById("score");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");

let score = 0;
let isGameRunning = false;

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

bubble.addEventListener("click", () => {
	if (!isGameRunning) return;
	score++;
	scoreSpan.textContent = score;
	moveBubble();
});

function startGame() {
	score = 0;
	scoreSpan.textContent = score;
	startButton.style.display = "none";
	endScreen.style.display = "none";
	bubble.style.display = "flex";
	isGameRunning = true;

	moveBubble();
	startTimer(endGame);
}

function endGame() {
	isGameRunning = false;
	stopTimer();
	bubble.style.display = "none";
	endScreen.style.display = "block";
	finalScore.textContent = score;
	startButton.style.display = "inline-block";
}

function moveBubble() {
	const container = document.getElementById("game-container");
	const maxX = container.clientWidth - 40;
	const maxY = container.clientHeight - 40;
	const x = Math.random() * maxX;
	const y = Math.random() * maxY;
	bubble.style.left = `${x}px`;
	bubble.style.top = `${y}px`;
}
