//variables
let minusSessionButton = document.getElementById('minusSessionButton');
let plusSessionButton = document.getElementById('plusSessionButton');
let startButton = document.getElementById('startButton');
let sessionTitle = document.querySelector('.sessionTitle');
let breakTitle = document.querySelector('.breakTitle');


// session minus button
minusSessionButton.addEventListener('click', () =>
{
  sessionTimer.textContent = parseInt(sessionTimer.textContent) - 1 + ' mins';
  bigTimer.textContent = parseInt(bigTimer.textContent) - 1 + ':00';
  if (sessionTimer.textContent <= "1 mins")
  {
    document.getElementById('minusSessionButton').disabled = true;
  }
  else if (sessionTimer.textContent <= "59 mins")
  {
    document.getElementById('plusSessionButton').disabled = false;
  }
});

//session plus button
plusSessionButton.addEventListener('click', () =>
{
    sessionTimer.textContent = parseInt(sessionTimer.textContent) + 1 + ' mins';
    bigTimer.textContent = parseInt(bigTimer.textContent) + 1 + ':00';
    if (sessionTimer.textContent <= "2 mins")
    {
      document.getElementById('minusSessionButton').disabled = false;
    }
    else if (sessionTimer.textContent >= "60 mins")
    {
      document.getElementById('plusSessionButton').disabled = true;
    }
});

//start button defaults 25mins
startButton.addEventListener('click', () =>
{
  function startTimer(duration, bigTimer) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        bigTimer.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
            bigTimer.textContent = "Break Time!";
        }
    }, 1000);
  }
    let startTime = 60 * parseInt(sessionTimer.textContent);
    bigTimer = document.querySelector('#bigTimer');
    startTimer(startTime, bigTimer);
    document.getElementById('startButton').disabled = true; //set false on stop button
});


/* eventually i'll put these in to switch between session and break */
//sessionTitle.textContent = '';
breakTitle.textContent = '';