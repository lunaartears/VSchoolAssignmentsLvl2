let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let timer = document.getElementById("timer");

let count = 0;
let intervalId;
timer.textContent = count;

function incrementTimer() {
    count++
    timer.textContent = count
};

startBtn.addEventListener("click", function() {
    intervalId = setInterval(incrementTimer, 1000)
});

stopBtn.addEventListener("click", function() {
    clearInterval(intervalId)
});
