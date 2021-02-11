const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const newCountdown = prompt('Please enter the date in following format: 1 January 2022');

function countdown() {
  const newDate = new Date(newCountdown);
  const currentDate = new Date();

  const totalSeconds = new Date(newDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);

  console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);
