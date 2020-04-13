//variables
const minusSessionButton = document.getElementById('minusSessionButton');
const plusSessionButton = document.getElementById('plusSessionButton');
const minusBreakButton = document.getElementById('minusBreakButton');
const plusBreakButton = document.getElementById('plusBreakButton');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('stopButton');
const pauseButton = document.getElementById('pauseButton');
const sessionTitle = document.querySelector('#sessionTitle');
const breakTitle = document.querySelector('.breakTitle');
let bigTimer = document.querySelector('#bigTimer');
let myTimer = 25;

// session minus button
minusSessionButton.addEventListener('click', () => {
    sessionTimer.textContent = parseInt(sessionTimer.textContent) - 1;
    bigTimer.textContent = parseInt(bigTimer.textContent) - 1 + ':00';
    if (sessionTimer.textContent <= 1) {
        minusSessionButton.disabled = true;
    } else if (sessionTimer.textContent <= 59) {
        plusSessionButton.disabled = false;
    }
});

//session plus button
plusSessionButton.addEventListener('click', () => {
    sessionTimer.textContent = parseInt(sessionTimer.textContent) + 1;
    bigTimer.textContent = parseInt(bigTimer.textContent) + 1 + ':00';
    if (sessionTimer.textContent >= 2) {
        minusSessionButton.disabled = false;
    }
    if (sessionTimer.textContent >= 60) {
        plusSessionButton.disabled = true;
    }
});

// break minus button
minusBreakButton.addEventListener('click', () => {
    breakTimer.textContent = parseInt(breakTimer.textContent) - 1;
    if (breakTimer.textContent <= 1) {
        minusBreakButton.disabled = true;
    } else if (breakTimer.textContent <= 59) {
        plusBreakButton.disabled = false;
    }
});

//break plus button
plusBreakButton.addEventListener('click', () => {
    breakTimer.textContent = parseInt(breakTimer.textContent) + 1;
    if (breakTimer.textContent >= 2) {
        minusBreakButton.disabled = false;
    }
    if (breakTimer.textContent >= 60) {
        plusBreakButton.disabled = true;
    }
});

//start button defaults 25mins
startButton.addEventListener('click', () => {
    function startTimer(startTime, bigTimer) {
        let timer = startTime;
        let minutes;
        let seconds;
        myTimer = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            bigTimer.textContent = minutes + ":" + seconds;

            if (--timer < 0 && sessionTitle.textContent == "Session") {
                clearInterval(myTimer);
                sessionTitle.textContent = "Break";
                startTimeBreak = 60 * parseInt(breakTimer.textContent);
                startBreak(startTimeBreak, bigTimer);
            }
        }, 1000);
    }
    let startTime = 60 * parseInt(sessionTimer.textContent);
    bigTimer = document.querySelector('#bigTimer');
    startTimer(startTime, bigTimer);
    startButton.disabled = true;
    minusSessionButton.disabled = true;
    plusSessionButton.disabled = true;
    minusBreakButton.disabled = true;
    plusBreakButton.disabled = true;
    pauseButton.disabled = false;
});

//global
function startTimer(startTime, bigTimer) {
    let timer = startTime;
    let minutes;
    let seconds;
    myTimer = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        bigTimer.textContent = minutes + ":" + seconds;

        if (--timer < 0 && sessionTitle.textContent == "Session") {
            clearInterval(myTimer);
            sessionTitle.textContent = "Break";
            startTimeBreak = 60 * parseInt(breakTimer.textContent);
            startBreak(startTimeBreak, bigTimer);
        }

    }, 1000);
}

//reset/stop Button
resetButton.addEventListener('click', () => {
    sessionTimer.textContent = 25;
    bigTimer.textContent = 25 + ':00';
    breakTimer.textContent = 25;
    clearInterval(myTimer);
    startButton.disabled = false;
    minusSessionButton.disabled = false;
    plusSessionButton.disabled = false;
    minusBreakButton.disabled = false;
    plusBreakButton.disabled = false;
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
});

//pause
pauseButton.addEventListener('click', () => {
    function startTimer(startTime, bigTimer) {
        let timer = startTime;
        let minutes;
        let seconds;
        myTimer = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            bigTimer.textContent = minutes + ":" + seconds;

            timer--;

            if (timer < 0 && sessionTitle.textContent == "Session") {
                clearInterval(myTimer);
                sessionTitle.textContent = "Break";
                startTimeBreak = 60 * parseInt(breakTimer.textContent);
                startBreak(startTimeBreak, bigTimer);
            } else if (timer < 0 && sessionTitle.textContent == "Break") {
                clearInterval(myTimer);
                sessionTitle.textContent = "Session";
                startTime = 60 * parseInt(sessionTimer.textContent);
                startTimer(startTime, bigTimer);
            }
        }, 1000);
    }
    let bigT = document.getElementById('bigTimer').textContent;
    let minutesStr = bigT.split(':');
    let minutesSelf = parseInt(minutesStr[0]);
    let secondsStr = bigT.split(':');
    let resumeSecs = parseInt(secondsStr[1]);
    let resumeMins = 60 * parseInt(minutesSelf);
    let startTime = resumeMins + resumeSecs;
    bigTimer = document.querySelector('#bigTimer');

    if (myTimer == -1) {
        clearInterval(myTimer);
        startTimer(startTime, bigTimer);
        pauseButton.innerHTML = 'Pause';
    } else {
        clearInterval(myTimer);
        myTimer = -1;
        pauseButton.innerHTML = 'Resume';
    }
});

// break Timer func
function startBreak(startTimeBreak, bigTimer) {
    startTimeBreak = 60 * parseInt(breakTimer.textContent);
    let timer = startTimeBreak;
    let minutes;
    let seconds;
    myTimer = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        bigTimer.textContent = minutes + ":" + seconds;

        if (--timer < 0 && sessionTitle.textContent == "Break") {
            clearInterval(myTimer);
            sessionTitle.textContent = "Session";
            startTime = 60 * parseInt(sessionTimer.textContent);
            startTimer(startTime, bigTimer);
        }

    }, 1000);
}