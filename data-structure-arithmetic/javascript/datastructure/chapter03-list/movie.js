const fs = require('fs');
const List = require('./main');
fs.readFile('./movie.txt', (err, result) => {
  const movies = result.toString().split('\n');
  const movieList = new List();
  for (let i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
  }
  console.log(movieList);
});