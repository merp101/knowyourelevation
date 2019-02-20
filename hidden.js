body.addEventListener('keydown', function() {
   var x = event.keyCode;
   if (x == 13) { //enter
       if (document.getElementById("capitalLocation").value == "Helsinki" || document.getElementById("capitalLocation").value == "helsinki" || document.getElementById("capitalLocation").value == "HELSINKI") {showThing();}
   }
});
function showThing() {
   document.getElementById("code").style.display="block";
   document.getElementById("topLeftStuff").style.display="none";
   document.getElementById("capitalLocation").style.display="none";
}
