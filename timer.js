var elevation = 0;
var ms = 1;
var sec = 60;
var min = 39;

document.getElementById("body").onload = function() {
  setInterval(
    function() {
      if (elevation >= 39000) {
        document.getElementById("body").style.backgroundColor="black";
        document.getElementById("container").display="none";
      } else {
        ms += 1;
        if (ms == 250) {
           if (sec == 1) {
            sec = 60;
            min -= 1;
           } else sec -= 1;
           document.getElementById("TtimerS").innerHTML = sec;
           document.getElementById("TtimerM").innerHTML = min;
           ms = 1;
        }
      document.getElementById("Etimer").innerHTML = elevation.toFixed(1) + " feet";
      elevation += (((39000 / 60) / 40) / 250) * mult;
      }
    }, 
  1);
}
