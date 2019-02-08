document.getElementById('head').style.color="red";
document.getElementsByClassName('head2')[0].style.color="green";
document.getElementsByTagName('h1')[2].style.color="blue";
let head = document.querySelectorAll("h1.head2");
console.log(head[0]);
