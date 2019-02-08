// HTML DOM allows JavaScript to react to HTML events:

// Examples of HTML events:

// When a user clicks the mouse
// When a web page has loaded
// When an image has been loaded
// When the mouse moves over an element
// When an input field is changed
// When an HTML form is submitted
// When a user strokes a key

let changeText = () => {
  document.getElementById('head').innerHTML = 'Learn basic JavaScript concepts in action!'
}

let displayDate = () => {
  document.getElementById('date').innerHTML = Date();
}

// The onload and onunload Events
// The onload and onunload events are triggered when the user enters or leaves the page.

// The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

// The onload and onunload events can be used to deal with cookies.

let checkCookies = () => {
  let text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("demo").innerHTML = text;
}

// The onchange Event
// The onchange event is often used in combination with validation of input fields.

// Below is an example of how to use the onchange. The upperCase() function will be called when a user changes the content of an input field.

onchange="upperCase()"

// The onmouseover and onmouseout Events
// The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:

let mOver = (obj) => {
  obj.innerHTML = "Thank You"
}

let mOut = (obj) => {
  obj.innerHTML = "Mouse Over Me"
}
