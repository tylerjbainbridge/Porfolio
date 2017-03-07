const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './dist')));

app.get('/*', (req, res) => {
  return res.sendFile('index.html');
});

app.listen(port, () => {
  console.log('listening on port 3000');
});