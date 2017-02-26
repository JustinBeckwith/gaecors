const express = require('express');
const cors = require('cors');
const path = require('path');
const formidable = require('formidable');
const app = express();

app.use(cors());

app.get('/data', (req, res) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

//app.options('/products/:id', cors());

app.post('/products/:id', (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields) => {
    console.log(fields);
    console.log('posting data to ' + req.params.id + ' with name ' + fields.name);
    res.sendStatus(202);
  });
});

app.get('/_ah/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/tryit', (req, res) => {
  res.sendFile(path.join(__dirname, 'tryit.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});