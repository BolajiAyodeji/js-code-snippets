const movies = [
  {titile: 'a', year: 2018, rating: 4.5}
  {titile: 'b', year: 2018, rating: 4.7}
  {titile: 'c', year: 2018, rating: 3}
  {titile: 'd', year: 2017, rating: 4.5}
]

// All movies in 2018 with rating > 4
// sort them by their rating
// secending order
// pick their title

const titles = movies
   .filter(m => m.year === 2018 && m.rating >= 4)
   .sort((a, b) => a.rating - b.rating)
   .reverse()
   .map(m => m.title);

   console.log(titles);
