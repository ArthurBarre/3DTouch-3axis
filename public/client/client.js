var x = document.getElementById('valueX');
var y = document.getElementById('valueY');
var z = document.getElementById('valueZ');
var x_witness = document.getElementById('x');
var y_witness = document.getElementById('y');
var z_witness = document.getElementById('z');
var socket = io.connect();
socket.on('positionUpdate', function (data) {
  let X = data[0];
  let Y = data[1];
  let Z = data[3];
  x.textContent = "X = " + X;
  x_witness.style.width = X * 300 + 'px';
  y.textContent = "Y = " + Y;
  y_witness.style.width = Y * 300 + 'px';
  z.textContent = "Z = " + Z;
  z_witness.style.width = Z * 300 + 'px';
});