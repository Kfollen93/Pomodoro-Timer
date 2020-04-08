// setTimeout and setInterval




// session minus button
const minusSessionButton = document.getElementById('minusSessionButton');
minusSessionButton.addEventListener('click', () =>
{
  sessionTimer.textContent = parseInt(sessionTimer.textContent) - 1 + ' mins';
  bigTimer.textContent = parseInt(bigTimer.textContent) - 1 + ':00';
  if (sessionTimer.textContent <= 1 + ' mins')
  {
    document.getElementById('minusSessionButton').disabled = true;
  }
  else if (sessionTimer.textContent <= 59 + ' mins')
  {
    document.getElementById('plusSessionButton').disabled = false;
  }
});

//session plus button
const plusSessionButton = document.getElementById('plusSessionButton');
plusSessionButton.addEventListener('click', () =>
{
    sessionTimer.textContent = parseInt(sessionTimer.textContent) + 1 + ' mins';
    bigTimer.textContent = parseInt(bigTimer.textContent) + 1 + ':00';
    if (sessionTimer.textContent <= 2 + ' mins')
    {
      document.getElementById('minusSessionButton').disabled = false;
    }
    else if (sessionTimer.textContent >= 60 + ' mins')
    {
      document.getElementById('plusSessionButton').disabled = true;
    }
});

