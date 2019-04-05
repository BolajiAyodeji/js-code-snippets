// Finding elements in an array

// Primitives
const numbers = [1, 2, 3, 4, 1];

console.log(numbers.indexOf('a')); // Would return -1 because 'a' does not exist in the array
console.log(numbers.indexOf(2, 0)); // Would return 1 because 2 exists in the array
console.log(numbers.lastIndexOf(1)); // Would return the last index of 1 in the array which is 4

console.log(numbers.indexOf(1) !== -1); // returns true

// A better way
console.log(numbers.includes(1)); // returns true

// Reference types
const courses = [
  {id: 1, name: 'maths'},
  {id: 2, name: 'english'},
];

const course = courses.find(function (course) {
return course.name === 'maths';
});

const index = courses.findIndex(function (course) {
  return course.name === 'maths';
});

console.log(course, index);
