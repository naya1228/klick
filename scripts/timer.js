let timeLeft = 30;
let countdownInterval = null;
const timerDisplay = document.getElementById("timer");

function startTimer(onTimeUp) {
	timeLeft = 30;
	timerDisplay.textContent = timeLeft;

	countdownInterval = setInterval(() => {
		timeLeft--;
		timerDisplay.textContent = timeLeft;
		if (timeLeft <= 0) {
			clearInterval(countdownInterval);
			onTimeUp();
		}
	}, 1000);
}

function stopTimer() {
	clearInterval(countdownInterval);
}
