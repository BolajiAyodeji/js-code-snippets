const numbers = [-1, 2, 6, 8, 12, 20, 99, 3, -4, 'hello'];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => {
  return '<li>' + n + '</li>';
})

const html = '<ul>' + items.join('') + '</ul>';
document.write(html);

// map to object
const filteredObj = filtered.map(n => ({value: n}));

console.log(filteredObj);

