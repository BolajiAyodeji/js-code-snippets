//Log ODD numbers between 0 and 20

//forLoop
for (let i = 0; i <= 20; i++;) {
if (i % 2 !== 0)console.log(i);
}

//whileLoop
let i = 0;
while (i <=20) {
  if (i % 2 !== 0)console.log(i);
  i++;
}

//do-whileLoop
let i = 0;
do {
  if (i % 2 !== 0)console.log(i);
  i++;
} while (i <=20);

//Note:
//When running this file once with all the loops,
//remember to change the variable name of the "do-whileLoop" from 'i' to something else
//You can't declare two variables with the same name using 'let'
//You will get an error
