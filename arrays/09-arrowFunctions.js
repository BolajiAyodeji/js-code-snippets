// syntax
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }

// sample arrow function
const courses = [
  {id: 1, name: 'maths'},
  {id: 2, name: 'english'},
];

const course = courses.find((course) => course.name === 'maths');

console.log(course);
