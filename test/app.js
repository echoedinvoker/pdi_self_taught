const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/test', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Test POST method success!' });
});

app.listen(3600, () => {
  console.log('Server is running on port 3600');
});

