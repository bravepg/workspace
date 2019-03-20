const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/200', (req, res) => {
  res.send({});
})

app.get('/404', (req, res) => {
  res.sendStatus(404);
})

app.get('/500', (req, res) => {
  res.sendStatus(500);
})

app.listen(3000, () => {
  console.log('listen...3000')
});