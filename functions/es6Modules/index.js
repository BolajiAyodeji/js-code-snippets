//imports the math functions from ./math.js
// Detailed guide on es6 modules import/export:
// https://www.sitepoint.com/understanding-es6-modules/

import * as math from './math.js';

console.log(math.sumAll(50, 10));
console.log(math.subtractAll(50, 10));
console.log(math.multiplyAll(50, 10));
console.log(math.divideAll(50, 10));
console.log(math.findModulus(50, 15));
