let timeLeft = 30;
let countdownInterval = null;
const timerDisplay = document.getElementById("timer");

function startTimer(onTimeUp) {
	timeLeft = 30;
	timerDisplay.textContent = `${timeLeft}s `;

	countdownInterval = setInterval(() => {
		timeLeft--;
		timerDisplay.textContent = `${timeLeft}s `;
		if (timeLeft <= 0) {
			clearInterval(countdownInterval);
			onTimeUp();
		}
	}, 1000);
}

function stopTimer() {
	clearInterval(countdownInterval);
}
