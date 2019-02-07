const products =
Array.from(document.querySelectorAll('.product'));

products
   .filter(product => parseFloat(product.innerHTML) < 10)
   .forEach(product => product.style.color = 'red');

console.log(products);
