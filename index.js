const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// One way to clone (Not cool :()
const circle2 = {};
for (let key in circle)
circle2[key] = circle[key];
console.log(circle2);

// Another way!
circle3 = Object.assign({}, circle);
console.log(circle3)

// The initiated object in method two does not have to be empty
circle4 = Object.assign({color: 'green'}, circle);
console.log(circle4)

// Simplest method. (The spread operator)
const circle5 ={ ...circle};
console.log(circle5);
