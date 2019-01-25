// Calculate the average of the marks
// 0 - 59 ==> Fail
// 60 - 69 ==> Pass
// 70 - 79 ==> Good
// 80 - 89 ==> Very Good
// 90 - 100 ==> Excellent

function calculateAverage(array) {
  let sum = 0;
  for (let value of array)
  sum += value;
  return sum / array.length;
}

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'Fail';
  if (average < 70) return 'Pass';
  if (average < 80) return 'Good';
  if (average < 90) return 'Very Good';
  return 'Excellent';
}
const marks = [40, 57, 90];
console.log(calculateGrade(marks));
