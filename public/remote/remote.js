var app = document.querySelector("#app");
var valueXm = document.getElementById("valueXm");
var valueYm = document.getElementById("valueYm");
var valueZ = document.getElementById("valueZ");
var dragItem = document.querySelector("#item");
var container = document.querySelector("#app");
var body = document.querySelector('body');
var socket = io.connect();
var width = body.clientWidth;
console.log('width: ', width);
var height = window.innerHeight;
var forceValue = Number;
var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function drag(e) {
  if (active) {

    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }
    // if (currentX < 0 - (width / 2)) {
    //   currentX = (width / 2);
    // }
    // if (currentY < 0 - (height / 2)) {
    //   currentY = (height / 2)
    // }
    xOffset = currentX;
    yOffset = currentY;

    let Xraw = currentX + (width / 2);
    let Xpos = Xraw / width;
    let Yraw = currentY + (height / 2);
    let Ypos = Yraw / height;

    send3DPositions(Xpos, Ypos, forceValue);
    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

Pressure.set(app, {
  change: function (force) {
    forceValue = force;
    valueZ.innerHTML = forceValue;
  }
});


function send3DPositions(x, y, z) {
  let position = [x, y, z];
  console.log('position: ', position);

  socket.emit('positionUpdate', position);
}
