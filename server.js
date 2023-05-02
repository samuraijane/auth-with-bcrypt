const express = require('express');
const pgp = require('pg-promise')();


const server = express();

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'demo_bcrypt',
  user: 'postgres',
  password: 'test',
  allowExitOnIdle: true
};

const db = pgp(cn);

server.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  });
});


server.listen(8080, () => console.log('The server is listening at PORT 8080'));
