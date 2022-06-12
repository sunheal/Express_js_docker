const express = require('express');
const app = express();
const port = 3050;

app.get('/', (req, res) => {
  res.send('Hi from SUNHEAL');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
})