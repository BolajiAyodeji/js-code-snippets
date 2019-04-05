
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error('Enter a valid array');
  }
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0)
}

try {
  const numbers = null;
  const count = countOccurrences(numbers, 1);
  console.log(count);
}
catch(e) {
  console.log(e.message)
}
