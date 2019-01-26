// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw () {
      console.log('draw');
    }
  }
}

const circleFactory = createCircle(1);
console.log(circleFactory);

// Constructor Function
function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circleConstructor = new CreateCircle(1);
console.log(circleConstructor);
