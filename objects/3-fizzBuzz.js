//FizzBuzz
//If number is divisible by 3 ==> Fizz
//If number is divisible by 5 ==> Buzz
//If number is divisible by 3 and 5 ==> FizzBuzz
//If number is not divisible by 3 or 5 ==> Number
//If input is not a number ==> Not a number!

let fizzBuzz = function (input) {
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

try {
  let output = fizzBuzz(Hello);
  console.log(output);
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log("Not a number!")
  }
}
