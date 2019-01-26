//In JavaScript, functions are objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const hi = Circle.call(1);

