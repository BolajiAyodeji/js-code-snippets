const circle = {
  radius: 1
};
console.log(circle);

// circle = {}; will result in error
// You cannot assign new properties to the const variable, but you can change or modify the object inside the variable

// Adds more properties to the circle object
circle.color = 'yellow';
circle.draw = function () {
  console.log('drawing');
}
circle.large = true;

// Deletes properties from the object
delete circle.color;
delete circle.draw;
delete circle.large;
// Now the object only contains the initial property
// Try adding new properties, view them in the console first before you delete
