const numbers = [2, 4, 1, 3];

let sorted = numbers.sort();
console.log(sorted);

let reversed = numbers.reverse();
console.log(reversed);

// Sorting arrays with objects
const courses = [
  {id: 1, name: 'React.js'},
  {id: 2, name: 'Node.js'},
]


courses.sort((a, b) =>{
// a < b => -1
// a > b => 1
// a =b => 0
const nameA = a.name.toLowerCase();
const nameB = b.name.toLowerCase();

if (nameA < nameB) {
  return -1
 }
if (nameB > nameA) {
  return 1
 }
  return 0;
})

console.log(courses);
