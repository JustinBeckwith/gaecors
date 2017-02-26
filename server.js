const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/data', (req, res) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});