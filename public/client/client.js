var x = document.getElementById('valueX');
var y = document.getElementById('valueY');
var z = document.getElementById('valueZ');
var x_witness = document.getElementById('x');
var y_witness = document.getElementById('y');
var z_witness = document.getElementById('z');
var socket = io.connect();

// var xV = 0;
// var yV = 0;
// var zV = 0;

socket.on('positionUpdate', function (data) {
  console.log('data: ', data);
  let X = data[0];
  let Y = data[1];
  let Z = data[2];
  // x_array.push(X);
  // console.log(x_array)
  // y_array.push(Y);
  // z_array.push(Z);
  console.log('Z: ', Z);
  x.textContent = "X = " + X;
  x_witness.style.width = X * 300 + 'px';
  y.textContent = "Y = " + Y;
  y_witness.style.width = Y * 300 + 'px';
  z.textContent = "Z = " + Z;
  z_witness.style.width = Z * 300 + 'px';
});

var position;

// socket.on('positionUpdate', function (data) {
//   console.log('data: ', data);
//   var X = 1;
//   var Y = 2;
//   var Z = 3;
//   //data[2];
//   position = { X, Y, Z }
// })



// const graph = document.getElementById('graph');
// var x_array = [0];
// var y_array = [0];
// var z_array = [0];
// var c = '#E63B24';

// Plotly.plot('graph', [{
//   type: 'scatter3d',
//   mode: 'lines',
//   x: x_array,
//   y: y_array,
//   z: z_array,
//   opacity: 0.7,
//   line: {
//     width: 5,
//     color: c,
//     colorscale: 'Viridis'
//   }
// }], {
//   height: 640
// });