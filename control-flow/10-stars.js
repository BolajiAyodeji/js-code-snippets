// Loop stars per row
// Increment star +1 per row

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
  for (let i = 0; i < row; i++)
    pattern += '*';
    console.log(pattern);
  }
}
showStars(50);
