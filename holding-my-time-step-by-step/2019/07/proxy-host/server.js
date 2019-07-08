const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
  res.redirect('https://www.baidu.com' + req.get('host'))
})

app.listen('8900', () => {
  console.log(`server running 8900`);
});