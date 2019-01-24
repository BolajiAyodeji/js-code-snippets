
const array = [80, 80, 50]; 

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'F';
  if (average < 70) return 'D'; 
  if (average < 80) return 'C'; 
  if (average < 90) return 'B'; 
  return 'A'; 
}

function calculateAverage(array) {
  let sum = 0; 
  for (let value of array)
    sum += value;
  return sum / array.length;
}