body.addEventListener('keydown', function() {
   var x = event.keyCode;
   console.log(x);
   if (x == 13) { //enter
       if (document.getElementById("capitalLocation").value == "Helsinki" || document.getElementById("capitalLocation").value == "helsinki" || document.getElementById("capitalLocation").value == "HELSINKI") {showThing();}
   }
});
function showThing() {
   document.getElementById("code").display="block";
   document.getElementById("topLeftStuff").display="none";
}
