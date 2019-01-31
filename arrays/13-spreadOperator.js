// combining arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

// const merged = first.concat(second);
const merged = [...first, ...second];
console.log(merged);

// you can add another element
const merged2 = [...first, 'chill',...second, 'done'];
console.log(merged2);

// const copy = merged.slice();
const copy = [...merged];
console.log(copy);
