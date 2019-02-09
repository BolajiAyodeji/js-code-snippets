// DOM Nodes
// According to the W3C HTML DOM standard, everything in an HTML document is a node:

// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// Every HTML attribute is an attribute node (deprecated)
// All comments are comment nodes

// With the HTML DOM, all nodes in the node tree can be accessed by JavaScript.

// New nodes can be created, and all nodes can be modified or deleted.

// Node Relationships
// The nodes in the node tree have a hierarchical relationship to each other.

// The terms parent, child, and sibling are used to describe the relationships.

// In a node tree, the top node is called the root (or root node)
// Every node has exactly one parent, except the root (which has no parent)
// A node can have a number of children
// Siblings (brothers or sisters) are nodes with the same parent

/* <html>

<head>
  <title>DOM Tutorial</title>
</head>

<body>
  <h1>DOM Lesson one</h1>
  <p>Hello world!</p>
</body>

</html> */

// From the HTML above you can read:

// <html> is the root node
// <html> has no parents
// <html> is the parent of <head> and <body>
// <head> is the first child of <html>
// <body> is the last child of <html>
// and:

// <head> has one child: <title>
// <title> has one child (a text node): "DOM Tutorial"
// <body> has two children: <h1> and <p>
// <h1> has one child: "DOM Lesson one"
// <p> has one child: "Hello world!"
// <h1> and <p> are siblings

// Navigating Between Nodes
// You can use the following node properties to navigate between nodes with JavaScript:

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// <title id="demo">DOM Tutorial</title>

// The element node <title> (in the example above) does not contain text.

// It contains a text node with the value "DOM Tutorial".

// The value of the text node can be accessed by the node's innerHTML property:

var myTitle = document.getElementById("demo").innerHTML;
// Accessing the innerHTML property is the same as accessing the nodeValue of the first child:

var myTitle = document.getElementById("demo").firstChild.nodeValue;
// Accessing the first child can also be done like this:

var myTitle = document.getElementById("demo").childNodes[0].nodeValue;
// All the (3) following examples retrieves the text of an <h1> element and copies it into a <p> element:
