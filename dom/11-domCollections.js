// The HTMLCollection Object
// The getElementsByTagName() method returns an HTMLCollection object.

// An HTMLCollection object is an array-like list (collection) of HTML elements.

let head1 = document.getElementsByTagName("h1");
console.log(head1.length)
console.log(head1[0])

// Note: The index starts at 0.

let myCollection = document.getElementsByTagName("h1");

for (i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color="blue";
}

// An HTMLCollection is NOT an array!

// An HTMLCollection may look like an array, but it is not.

// You can loop through the list and refer to the elements with a number (just like an array).

// However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.
