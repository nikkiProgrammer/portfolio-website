let seconds = 0;
let minutes = 0;
let hours = 0;

let countingSeconds = 0;
let countingMinutes = 0;
let countingHours = 0;

let interval = null;

let press = "stopped";

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    countingSeconds = "0" + seconds.toString();
  } else {
    countingSeconds = seconds;
  }

  if (minutes < 10) {
    countingMinutes = "0" + minutes.toString();
  } else {
    countingMinutes = minutes;
  }

  if (hours < 10) {
    countingHours = "0" + hours.toString();
  } else {
    countingHours = hours;
  }

  document.getElementById("display").innerHTML =
    countingHours + ":" + countingMinutes + ":" + countingSeconds;
}

function startStop() {
  if (press === "stopped") {
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    press = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    press = "stopped";
  }
}

function reset(press = "stopped") {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}
