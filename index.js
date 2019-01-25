function showNumber (limit) {
  for (let i = 0; i <= limit; i++) {
    const response = (i % 2 === 0) ? "EVEN" : "ODD";
    console.log(i, response);
  }
}
showNumber(10);
