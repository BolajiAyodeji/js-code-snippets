function createCircle(radius) {
  return {
    radius,
    draw () {
      console.log('draw');
    }
  }
  circle.draw();
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
