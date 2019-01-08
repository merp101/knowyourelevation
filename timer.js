var elevation = 39000;
var ms = 1;
var sec = 60;
var min = 39;
if (mult == undefined) {
  mult = false;
}
if (cheater == undefined) {
  cheater = false;
}

function incTimer() {
  let thresh = (cheater) ? (250 / 1000) : 250;
  ms += 1;
  if (ms >= thresh) {
     if (sec == 1) {
        sec = 59;
        min -= 1;
     } else { 
        sec -= 1;
        document.getElementById("TtimerS").innerHTML = sec;
        document.getElementById("TtimerM").innerHTML = min;
        ms = 1;
     }
	}
  document.getElementById("Etimer").innerHTML = elevation.toFixed(1) + " feet";
  elevation -= (39000 / (1000 * 60 * 40)) * ((mult) ? 1000 : 1);
	if (elevation <= 0) {
      document.getElementById("body").style.backgroundColor="black";
      document.getElementById("container").display="none";
  }
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

