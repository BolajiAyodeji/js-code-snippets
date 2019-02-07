//imports the math functions from ./math.js
// Detailed guide on es6 modules import/export: https://www.sitepoint.com/understanding-es6-modules/
import { sumAll } from './math.js'
import { subtractAll } from './math.js'
import { multiplyAll } from './math.js'
import { divideAll } from './math.js'

console.log(sumAll(50, 10));
console.log(subtractAll(50, 10));
console.log(multiplyAll(50, 10));
console.log(divideAll(50, 10));
