let time = (25 * 60) - 1;

const startButton = document.getElementById("start");
const timerElement = document.getElementById("clock");
const task = document.getElementById("task");
let interval = null;
let active = false;
let working = true;
let pomodoros = 0;

function updateCountDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    timerElement.textContent = `${minutes}:${seconds}`;
    if (time > 0) {
        time--;
    } else {
        if (working) {
            pomodoros++;
            if (pomodoros % 4 == 0) {
                time = 15 * 60;
            } else {
                time = 5 * 60;
            }
            task.textContent = "break";
            working = !working;
        } else {
            time = 25 * 60;
            task.textContent = "work";
            working = !working;
        }
    }

}

function startTimer() {
    task.style.color = "#2e6118";
    if (!active) {
        interval = setInterval(updateCountDown, 1000);
        startButton.querySelector("p").textContent = "Pause";
        active = !active;
    } else {
        clearInterval(interval);
        startButton.querySelector("p").textContent = "Resume";
        active = !active;
    }
}

function resetTimer() {
    time = 25 * 60;
    active = false;
    clearInterval(interval);
    task.style.color = "#ecffd8";
    startButton.querySelector("p").textContent = "Start";
    updateCountDown();
}
