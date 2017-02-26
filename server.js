const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors())

app.get('/data', (req, res) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.get('/tryit', (req, res) => {
  res.sendFile(path.join(__dirname, 'tryit.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});