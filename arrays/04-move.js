const numbers = [1, 2, 3, 4, 5];

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }
  else {
  const output = [...array];
  const number = output.splice(index, 1)[0];
  output.splice(position, 0, number);
  return output
  }
}

console.log(move(numbers, 1, -1));
