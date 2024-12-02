const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.get('/', (req, res) => {
  res.send('Hello world form express!');
});

app.listen(port, () => {
  console.log(`Example app Listening on port${port}`);
})