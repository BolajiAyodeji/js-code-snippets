
showStars(2);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
      pattern += '*'; 
    console.log(pattern);
  }
} 