const numbers = [100, 300, 500, 70];

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }
// console.log(sum);

// reduce method
const sum =numbers.reduce((accummulator, value) => accummulator + value);

console.log(sum);

// Find average
const euros = [10, 20, 20, 10];
const average = euros.reduce((total, amount, index, array) => {
  const sum = total += amount;
  console.log(sum);
  if( index === array.length-1) {
    return sum/array.length;
  }else {
    return total;
  }
});
console.log(average); // 39.37



