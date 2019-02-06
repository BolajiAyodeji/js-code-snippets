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
