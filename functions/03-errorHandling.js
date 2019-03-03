
function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error('Enter a valid array');
  }
  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    return accumulator + occurence;
  }, 0)
}

try {
  const numbers = null;
  const count = countOccurences(numbers, 1);
  console.log(count);
}
catch(e) {
  console.log(e.message)
}
