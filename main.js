const pressure = require('pressure')
var app = document.querySelector("#app");
var valueZ = document.getElementById("valueZ")
var forceValue = "";

pressure.set(app, {
  change: function (force, event) {
    console.log(force);
    forceValue = force;
    valueZ.innerHTML = forceValue;
  }
});