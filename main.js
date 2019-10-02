function App() {
  this.app = document.querySelector("#app");
  this.valueZ = document.getElementById("valueZ")
  this.forceValue = "";
  pressure = require('pressure')
  pressure.set(app, {
    change: function (force, event) {
      console.log(force);
      this.forceValue = force;
      this.valueZ.innerHTML = this.forceValue;
    }
  });

}