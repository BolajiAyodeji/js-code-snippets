const array = [1, 3, 4, 6]
function includes(array, searchElement) {
  for(let element of array)
   if (element === searchElement)
     return true;
  return false;
}

console.log(includes(array, 4));
