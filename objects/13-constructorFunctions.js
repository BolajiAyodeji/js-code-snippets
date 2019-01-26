// Constructor function
// Constructs or creates an Object
// By convention, constructor functions are named with "Pascal Notation"
// camel notation ==> oneTwoThree
// pascal notation ==> OneTwoThree

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(1)
console.log(circle);
