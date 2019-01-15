var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var splitsOl    = document.getElementById('splits');

var intervalId;

function printTime() {
  intervalId = setInterval(function() {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  minUni.innerText = this.chronometer.minutes[1];
  minDec.innerText = this.chronometer.minutes[0];
}

function printSeconds() {
  secUni.innerText = this.chronometer.seconds[1];
  secDec.innerText = this.chronometer.seconds[0];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn start") {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerText = "STOP";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
    printTime();
  } else if (btnLeft.className === "btn stop") {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerText = "START";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerText = "RESET";
    chronometer.stopClick();
  }
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === "btn reset") {
    minDec.innerText = 0;
    minUni.innerText = 0;
    secDec.innerText = 0;
    secUni.innerText = 0;
    chronometer.resetClick();
    while (splitsOl.hasChildNodes()) {
      splitsOl.removeChild(splitsOl.lastChild);
    }
  } else if(btnRight.className === "btn split") {

    var li = document.createElement("li");
    li.innerText = chronometer.split();
    splitsOl.appendChild(li);
  }
});
