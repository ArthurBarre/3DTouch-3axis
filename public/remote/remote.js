var app = document.querySelector("#app");
var valueZ = document.getElementById("valueZ");
var valueX = document.getElementById("valueX");
var valueY = document.getElementById("valueY");
var valueXm = document.getElementById("valueXm");
var valueYm = document.getElementById("valueYm");
var body = document.querySelector('body');
var socket = io.connect();
var width = body.clientWidth;
console.log('width: ', width);
var height = window.innerHeight;
console.log('height: ', height);

var forceValue = "";

Pressure.set(app, {
  change: function (force, event) {
    console.log(force);
    forceValue = force;
    valueZ.innerHTML = forceValue;
  }
});

app.addEventListener("click", handleClickPosition, false);

function handleClickPosition(e) {
  let y = e.clientY;
  let x = e.clientX;
  let z = forceValue;
  valueZ.innerHTML = "z = " + z;
  valueX.innerHTML = "x = " + x;
  valueY.innerHTML = "y = " + y;
  convertValue(x, y,z);

  console.log('valueX: ', valueX);
}
function convertValue(x, y,z) {
  var X = x / width;
  var Y = y / height;
  var Z = z;
  let position = {X,Y,Z};
  valueXm.innerHTML = "x modified = " + X;
  valueYm.innerHTML = "y modified = " + Y;
  socket.emit('positionUpdate',position);
}