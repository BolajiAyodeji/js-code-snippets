function * greet() {
  console.log(`You called 'next()'`);
  yield 'hello there';
  }

  let greeter = greet();

  let next = greeter.next();
  console.log(next);

  let done = greeter.next();
  console.log(done);

  // ----------------------------------------------------------------------------------------

  function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2
    console.log('I will be printed after the pause');
    yield 'World!';
    yield 'hi';
  }
  const generatorObject = generatorFunction(); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6
  // This will be executed first.
  // Hello,
  // I will be printed after the pause
  // World!
  // undefined

