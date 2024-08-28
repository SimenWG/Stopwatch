let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];
const display = document.getElementById('display');

function updateDisplay() {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

updateDisplay();  // Initialize the display
