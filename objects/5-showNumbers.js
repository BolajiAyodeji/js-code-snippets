// check if number is ODD or even
// Display all number count from 0 > limit and number status
// e.g 2 "EVEN"

function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    const response = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, response);
  }
}
showNumber(10);
