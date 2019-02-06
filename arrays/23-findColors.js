const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']},
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
      total.push(color);
  })
  return total;
}, [])
colors //['blue','green','green','black','orange','blue','green','red']
