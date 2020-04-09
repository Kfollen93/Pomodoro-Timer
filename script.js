//variables
let minusSessionButton = document.getElementById('minusSessionButton');
let plusSessionButton = document.getElementById('plusSessionButton');
let minusBreakButton = document.getElementById('minusBreakButton');
let plusBreakButton = document.getElementById('plusBreakButton');
let startButton = document.getElementById('startButton');
let resetButton = document.getElementById('stopButton');
let sessionTitle = document.querySelector('.sessionTitle');
let breakTitle = document.querySelector('.breakTitle');


// session minus button
minusSessionButton.addEventListener('click', () =>
{
  sessionTimer.textContent = parseInt(sessionTimer.textContent) - 1;
  bigTimer.textContent = parseInt(bigTimer.textContent) - 1 + ':00';
  if (sessionTimer.textContent <= 1)
  {
    document.getElementById('minusSessionButton').disabled = true;
  }
  else if (sessionTimer.textContent <= 59)
  {
    document.getElementById('plusSessionButton').disabled = false;
  }
});

//session plus button
plusSessionButton.addEventListener('click', () =>
{
    sessionTimer.textContent = parseInt(sessionTimer.textContent) + 1;
    bigTimer.textContent = parseInt(bigTimer.textContent) + 1 + ':00';
    if (sessionTimer.textContent >= 2)
    {
      document.getElementById('minusSessionButton').disabled = false;
    }
    if (sessionTimer.textContent >= 60)
    {
      document.getElementById('plusSessionButton').disabled = true;
    }
}); 

// break minus button
minusBreakButton.addEventListener('click', () =>
{
  breakTimer.textContent = parseInt(breakTimer.textContent) - 1;
  //bigTimer.textContent = parseInt(bigTimer.textContent) - 1 + ':00';
  if (breakTimer.textContent <= 1)
  {
    minusBreakButton.disabled = true;
  }
  else if (breakTimer.textContent <= 59)
  {
    plusBreakButton.disabled = false;
  }
});

//break plus button
plusBreakButton.addEventListener('click', () =>
{
    breakTimer.textContent = parseInt(breakTimer.textContent) + 1;
    //bigTimer.textContent = parseInt(bigTimer.textContent) + 1 + ':00';
    if (breakTimer.textContent >= 2)
    {
      minusBreakButton.disabled = false;
    }
    if (breakTimer.textContent >= 60)
    {
      plusBreakButton.disabled = true;
    }
}); 


//start button defaults 25mins
startButton.addEventListener('click', () =>
{
  function startTimer(duration, bigTimer) {
        let timer = duration, minutes, seconds;
        myTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        bigTimer.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
            //bigTimer.textContent = "Break Time!"; 
        }
    }, 1000);
  }
    let startTime = 60 * parseInt(sessionTimer.textContent);
    bigTimer = document.querySelector('#bigTimer');
    startTimer(startTime, bigTimer);
    startButton.disabled = true;
    minusSessionButton.disabled = true;
    plusSessionButton.disabled = true;
});

//stop Button
resetButton.addEventListener('click', () =>
{
  sessionTimer.textContent = 25;
  bigTimer.textContent = 25 + ':00';
  clearInterval(myTimer);
  startButton.disabled = false;
  minusSessionButton.disabled = false;
  plusSessionButton.disabled = false;
});


/* eventually i'll put these in to switch between session and break */
//sessionTitle.textContent = '';
breakTitle.textContent = '';