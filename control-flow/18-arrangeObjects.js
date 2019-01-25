// count number of strings and numbers in an Object
// rearrange and log strings before numbers

function showProperties(obj) {
  let count = 0;
  for (let value in obj)
    if (typeof obj[value] === 'string')
    console.log(value + '==>' + obj[value])

    for (let value in obj)
      if  (typeof obj[value] === 'number')
    console.log(value + '==>' + obj[value])
}
const userData = {
  name: 'Bolaji',
  gender: 'male',
  age: 19,
  telNumber: 08109445504,
  email: 'hi@bolajiayodeji.com',
  mood: 'happy',
  magicNumber: 5
}
console.log(showProperties(userData));
