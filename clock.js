const clockContainer = document.querySelector('.clock-container');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const amPmElement = document.querySelector('.am-pm');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';

  hourElement.textContent = pad(hours % 12 || 12);
  minuteElement.textContent = pad(minutes);
  secondElement.textContent = pad(seconds);
  amPmElement.textContent = amPm;

  const hourAngle = (hours % 12 + minutes / 60) * 30;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;

  requestAnimationFrame(updateClock);
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

updateClock();