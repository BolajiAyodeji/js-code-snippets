const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// Loop through objects
for (let key in circle)
console.log(key, circle[key]);

// Loop through using "for of loop" with ".keys method"
for (let key of Object.keys(circle))
console.log(key);

// Loop through using "for of loop" with ".entries method"
for (let key of Object.entries(circle))
console.log(key);

// Check if object contains some property
let check = ('radius' in circle) ? 'yes' : 'no';
console.log(check);
