const express = require('express');
const bp = require('body-parser');
var cors = require('cors');
const knex = require('./knex/knex.js');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.get('/head', (req, res) => {
  knex
    .select()
    .from('heads')
    .then(data => {
      res.json(data);
    });
});
app.get('/arm', (req, res) => {
  knex
    .select()
    .from('arms')
    .then(data => {
      res.json(data);
    });
});
app.get('/leg', (req, res) => {
  knex
    .select()
    .from('legs')
    .then(data => {
      res.json(data);
    });
});
app.get('/body', (req, res) => {
  knex
    .select()
    .from('bodys')
    .then(data => {
      res.json(data);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
