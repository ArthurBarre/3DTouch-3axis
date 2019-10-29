var app = document.querySelector("#app");
var x_witness = document.getElementById('x');
var y_witness = document.getElementById('y');
var z_witness = document.getElementById('z');
var valueXm = document.getElementById("valueXm");
var valueYm = document.getElementById("valueYm");
var body = document.querySelector('body');
var socket = io.connect();
var width = body.clientWidth;
var height = window.innerHeight;

var forceValue = "";

Pressure.set(app, {
  change: function (force) {
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
}
function convertValue(x, y,z) {
  var X = x / width;
  var Y = y / height;
  var Z = z;
  let position = {X,Y,Z};
  valueXm.innerHTML = "x modified = " + X;
  valueYm.innerHTML = "y modified = " + Y;
  x_witness.style.width = X *'100vw';
  y_witness.style.width = Y  *'100vw';
  z_witness.style.width = Z  *'100vw';
  socket.emit('positionUpdate',position);
}