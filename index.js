function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circleConstructor = new CreateCircle(1);
console.log(circleConstructor);
