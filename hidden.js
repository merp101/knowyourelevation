body.addEventListener('keydown', function() {
   var x = event.keyCode;
   console.log(x);
   if (x == 13) { //enter
       if (document.getElementById("capitalLocation").value == "Helsinki" || document.getElementById("capitalLocation").value == "helsinki" || document.getElementById("capitalLocation").value == "HELSINKI") {showRiddle();}
   }
});
function showRiddle() {
   document.getElementById("letter").display="block";
   document.getElementByClass("left").display="none";
}
