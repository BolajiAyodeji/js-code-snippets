let newText = document.createElement("p");
let node = document.createTextNode("This is new.");
newText.appendChild(node);

let element = document.getElementById("txt");
element.appendChild(newText);

// Creating new HTML Elements - insertBefore()
let para = document.createElement("p");
let nodeN = document.createTextNode("This is another new text.");
para.appendChild(nodeN);

let elementN = document.getElementById("txt");
let child = document.getElementById("head3");
elementN.insertBefore(para, child);

// Removing Existing HTML Elements
// To remove an HTML element, you must know the parent of the element:
let parent = document.getElementById("txt");
let child2 = document.getElementById("head4");
parent.removeChild(child2);

// Find the child you want to remove, and use its parentNode property to find the parent:
let child3 = document.getElementById("demo");
child3.parentNode.removeChild(child3);

// Replacing HTML Elements
// To replace an element to the HTML DOM, use the replaceChild() method:
var parent2 = document.getElementById("txt");
var child4 = document.getElementById("head5");
var para2 = document.createElement("h1");
var node2 = document.createTextNode("This is new.");
para2.appendChild(node2);
parent2.replaceChild(para2,child4);
