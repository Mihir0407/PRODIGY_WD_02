let timer;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let lapCounter = 1;

const timeDisplay = document.getElementById("time-display");
const startPauseBtn = document.getElementById("start-pause-btn");
const resetBtn = document.getElementById("reset-btn");
const lapBtn = document.getElementById("lap-btn");
const lapTimesList = document.getElementById("lap-times");
startPauseBtn.addEventListener("click", () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
        startPauseBtn.textContent = "Pause";
        isRunning = true;
    } else {
        clearInterval(timer);
        startPauseBtn.textContent = "Start";
        isRunning = false;
    }
});
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    startPauseBtn.textContent = "Start";
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00";
    lapTimesList.innerHTML = "";
    lapCounter = 1;
});
lapBtn.addEventListener("click", () => {
    if (isRunning) {
        const lapTime = timeDisplay.textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapTimesList.appendChild(lapItem);
        lapCounter++;
    }
});
function updateTime() {
    elapsedTime = Date.now() - startTime;

    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
