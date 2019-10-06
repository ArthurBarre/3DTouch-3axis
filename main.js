// const pressure = require('pressure')
var app = document.querySelector("#app");
var valueZ = document.getElementById("valueZ");
var valueX = document.getElementById("valueX");
var valueY = document.getElementById("valueY");

var forceValue = "";

// pressure.set(app, {
//   change: function (force, event) {
//     console.log(force);
//     forceValue = force;
//     valueZ.innerHTML = forceValue;
//   }
// });

app.addEventListener("click", handleClickPosition, false);

function handleClickPosition(e) {
  let y = e.clientY;
  console.log('valueY: ', valueY);
  let x = e.clientX;
  valueX.innerHTML = "x = " + x;
  valueY.innerHTML = "y = " + y;
  console.log('valueX: ', valueX);
}