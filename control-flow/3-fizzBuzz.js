//FizzBuzz
//If number is divisible by 3 ==> Fizz
//If number is divisible by 5 ==> Buzz
//If number is divisible by 3 and 5 ==> FizzBuzz
//If number is not divisible by 3 or 5 ==> Number
//If input is not a number ==> Not a number!


function fizzBuzz (input) {
  if (typeof input !== 'number')
    return 'Not a number!';

  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return 'Buzz';

  if (input % 3 !== 0 && input % 5 !== 0)
    return input;

    return input;
}

let output = fizzBuzz(7);
console.log(output);
