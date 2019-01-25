// Calculate the average of the marks
// 1 - 59 ==> Fail
// 60 - 69 ==> Pass
// 70 - 79 ==> Good
// 80 - 89 ==> Very Good
// 90 - 100 ==> Excellent
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'Fail';
  if (average < 70) return 'Pass';
  if (average < 80) return 'Good';
  if (average < 90) return 'Very Good';
  return 'Excellent';
}

function calculateAverage(scores) {
  let sum = 0;
  for (let index of scores)
  sum += index;
  return sum / scores.length;
}
const scores = [90, 95, 90];
console.log(calculateGrade(scores));
