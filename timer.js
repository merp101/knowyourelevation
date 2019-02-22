var baseElevation = 36000;
var elevation = baseElevation;
var ms = 1;
var sec = 0;
var baseMin = 35;
var min = baseMin;
let thresh;

function lose() {
	elevation = 0;
}

function incTimer() {
  thresh = 250;
  ms += 1;
  if (ms >= thresh) {
     if (sec == 0) {
        sec = 60;
        min -= 1;
     } else { 
        sec -= 1;
        document.getElementById("TtimerS").innerHTML = sec;
        document.getElementById("TtimerM").innerHTML = min;
        ms = 1;
     }
	}
  document.getElementById("Etimer").innerHTML = elevation.toFixed(1) + " feet";
  elevation -= (baseElevation / (1000 * 60 * baseMin));
  if (elevation <= 0) {
      document.getElementById("body").style.backgroundColor="black";
      document.getElementById("container").style.display="none";
  }
}

function setBaseMin(x) {
	baseMin = x;
	min = x;
	sec = 0;
}
function setBaseElevation(x) {
	baseElevation = x;
	elevation = x;
}

setInterval(
  function(){
    setTimeout(
      function(){
        incTimer();
      },
    1)
  },
0);

