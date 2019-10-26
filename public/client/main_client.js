var x = document.getElementById('valueX');
var y =  document.getElementById('valueY');
var z =  document.getElementById('valueZ');
var x_witness = document.getElementById('x');
var y_witness = document.getElementById('y');
var z_witness = document.getElementById('z');
var socket = io.connect();
socket.on('positionUpdate', function(data){
  var {X,Y,Z} = data;
  x.textContent="X = "+X;
  x_witness.style.width = X * 500  +'px';
  y.textContent="Y = "+Y;
  y_witness.style.width = Y * 500  +'px';
  z.textContent="Z = "+Z;
  z_witness.style.width = Z * 500  +'px';
});