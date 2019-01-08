var cheater = false;
var mult = false;
body.addEventListener('keydown', function() {
   var x = event.keyCode;
   console.log(x);
   if (x == 13) { //enter
       if (document.getElementById("capitalLocation").value == "Helsinki" || document.getElementById("capitalLocation").value == "helsinki") {alert("you win")}
   } else if (x === 123 || x === 17 || x === 122 || x === 116 || x === 112 || x === 113 || x === 114 || x === 115) { // f1, f2, f3, f4, f5, f11, f12
     if (!cheater) {
       document.getElementById("cheaterWarning").display="block"; 
       cheater = true;
     } else if (cheater) {mult = true}
   }
});
