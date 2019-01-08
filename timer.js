var elevation = 39000;
var ms = 1;
var sec = 60;
var min = 39;
if (mult == undefined) {
  mult = false;
}

function incTimer() {
  ms += 1;
  if (ms == 250) {
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
  elevation -= (13/200) * ((mult) ? 1000 : 1);
}
  

function loop() {
  if (elevation <= 0) {
      document.getElementById("body").style.backgroundColor="black";
      document.getElementById("container").display="none";
    } else {
      incTimer();
    }
}

setInterval(
  function(){
    setTimeout(
      function(){
        loop()
      },
    1)
  },
0);

