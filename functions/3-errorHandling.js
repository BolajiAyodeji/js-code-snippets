
try {
  const numbers = [1, 2, 3, 4]; 
  const count = countOccurrences(null, 1); 
  console.log(count); 
}
catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}