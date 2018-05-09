const express = require('express');
const bp = require('body-parser');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const knex = require('./knex/knex.js');
const PORT = process.env.PORT || 3000;
const SECRETKEY = process.env.SECRETKEY || 'secretKey';

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.post('/register', (req, res) => {
  let user = req.body;
  knex
    .insert(user)
    .returning(['user_id', 'username', 'password'])
    .into('users')
    .then(data => {
      let payload = { subject: data.user_id };
      let token = jwt.sign(payload, SECRETKEY);
      console.log(data);
      res.status(200).send({ token });
    });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  knex('users')
    .where({ username: username, password: password })
    .then(data => {
      if (data.length === 1) {
        let payload = { subject: data[0].user_id };
        let token = jwt.sign(payload, SECRETKEY);
        res.send({ token });
      } else {
        res.status(401).send('Invalid Username And Password');
      }
    })
    .catch(err => {
      res.send(err);
    });
});

app.get('/events', (req, res) => {
  const { username, password } = req.body;
  knex('users')
    .where({ username: username, password: password })
    .then(data => {
      if (data.length === 1) {
        let payload = { subject: data[0].user_id };
        let token = jwt.sign(payload, SECRETKEY);
        res.send({ token });
      } else {
        res.status(401).send('Invalid Username And Password');
      }
    });
  res.json(events);
});

app.get('/monsters', verifyToken, (req, res) => {
  // const { username, password } = req.body;
  console.log('running');
  const username = 'steveninouye';
  const password = 'password';
  knex('users')
    .where({ username: username, password: password })
    .innerJoin('user_monsters', 'users.user_id', 'user_monsters.user_id')
    .innerJoin('heads', 'user_monsters.head_id', 'heads.head_id')
    .innerJoin('legs', 'user_monsters.leg_id', 'legs.leg_id')
    .innerJoin('bodys', 'user_monsters.body_id', 'bodys.body_id')
    .innerJoin(
      'right_arms',
      'user_monsters.right_arm_id',
      'right_arms.right_arm_id'
    )
    .innerJoin(
      'left_arms',
      'user_monsters.left_arm_id',
      'left_arms.left_arm_id'
    )
    .then(data => {
      console.log(data);
      res.send(data);
    });
  // res.json(events);
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

function verifyToken(req, res, next) {
  let token = req.headers.authorization.split(' ')[1];
  let payload = jwt.verify(token, SECRETKEY);
  if (!req.headers.authorization || token === null || !payload) {
    return res.status(401).send('Unauthorized Request');
  } else {
    req.userId = payload.subject;
    next();
  }
}
