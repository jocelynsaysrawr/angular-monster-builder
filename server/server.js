const express = require('express');
const bp = require('body-parser');
var cors = require('cors');
const knex = require('./knex/knex.js');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.post('/register', (req, res) => {
  ///////////////////////////////// TO DO /////////////////////////
  // NEED TO CHECK IF USERNAME ALREADY EXISTS IN DATABASE
  let user = req.body;
  knex
    .insert(user)
    .into('users')
    .then(data => {
      res.send(data);
    });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  knex('users')
    .where({ username: username, password: password })
    .then(data => {
      if (data.length === 1) {
        res.send(data[0]);
      } else {
        res.send('Invalid Username And Password');
      }
    })
    .catch(err => {
      res.send(err);
    });
});

app.get('/events', (req, res) => {
  let events = [
    {
      _id: '1',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '2',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '3',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '4',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '5',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '6',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    }
  ];
  res.json(events);
});

app.get('/special', (req, res) => {
  let events = [
    {
      _id: '1',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '2',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '3',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '4',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '5',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      _id: '6',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z'
    }
  ];
  res.json(events);
});

app.get('/head', (req, res) => {
  knex
    .select()
    .from('heads')
    .then(data => {
      res.json(data);
    });
});

app.get('/left-arm', (req, res) => {
  knex
    .select()
    .from('left_arms')
    .then(data => {
      res.json(data);
    });
});

app.get('/right-arm', (req, res) => {
  knex
    .select()
    .from('right_arms')
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
