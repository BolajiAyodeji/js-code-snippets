const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function except(array, excluded) {
  const output = [];
  for (let number of array)
   if(!excluded.includes(number))
   output.push(number);
   console.log(output);
}

except(numbers, [1, 4, 8, 3, 10]);
