// combining arrays
const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [{id: 1, nama: 'a'}];

const merged = first.concat(second, third);
console.log(merged);

// slice arrays
const slice = merged.slice(0, 3);
console.log(slice);
