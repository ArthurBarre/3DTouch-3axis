var x = document.getElementById('valueX');
var y = document.getElementById('valueY');
var z = document.getElementById('valueZ');
var x_witness = document.getElementById('x');
var y_witness = document.getElementById('y');
var z_witness = document.getElementById('z');
var socket = io.connect();
socket.on('positionUpdate', function (data) {
  console.log('data: ', data);
  let X = data[0];
  let Y = data[1];
  let Z = data[2];
  console.log('Z: ', Z);
  x.textContent = "X = " + X;
  x_witness.style.width = X * 300 + 'px';
  y.textContent = "Y = " + Y;
  y_witness.style.width = Y * 300 + 'px';
  z.textContent = "Z = " + Z;
  z_witness.style.width = Z * 300 + 'px';
});

var position;
socket.on('positionUpdate', function (data) {
  console.log('data: ', data);
  var X = 1;
  var Y = 2;
  var Z = 3;
  //data[2];
  position = { X, Y, Z }
})
