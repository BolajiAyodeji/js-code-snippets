//Maps and WeakMaps with ES6

let myMap = new Map();

//API
/*
set()
get()
size
clear()
has()
*/

let myObj = {};
let myFunc = function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('string', 2);

console.log('get on myMap = ' + myMap.get(myObj));

//myMap.clear();

console.log('has on non-existing key = ' + myMap.has('qwerty'));

//Iterators
//keys()
//entries()
//values

for(let [key, value] of myMap.entries()){
  console.log(key + ' = ' + value);
}

//WeakMap Restrictions
/*
Because no references to keys are stored we do not have access to methods that require the ability to iterate the map such as:
keys()
values()
entries()
AND
clear()
*/
let myWeakMap = new WeakMap();

let myObj2 = {};
let myFunc2 = function(){};

myMap.set(myObj2, 'bar');
myMap.set(myFunc2, 'world');

console.log(myMap.get(myObj));
