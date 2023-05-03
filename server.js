const express = require('express');
const pgp = require('pg-promise')();
const bcrypt = require('bcrypt')

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

server.get('/password', async(req,res) => {
  try{
    const result = await db.query('SELECT password FROM students WHERE id = 1')
    const passwordFromDatabase = result[0].password
    console.log(`This is the password before encryption: ${passwordFromDatabase}`)

    // Generate a salt to use for the hash
    const salt = await bcrypt.genSalt(10)

    // Hash the password from the database with the salt
    const hashedPassword = await bcrypt.hash(passwordFromDatabase, salt)
    console.log(`This is the hashed password: ${hashedPassword}`)

    // Compare the original password with the hashed password
    const isMatch = await bcrypt.compare(passwordFromDatabase,hashedPassword)

    if(isMatch){
      console.log('Yay, passwords match!')
      res.send('Yay, passwords match!')
    } else{
      console.log(':(')
      res.send(':(')
    }

  } catch (error){
    console.log(error)
    res.status(500).send(`Internal Server Error. Sorry!`)
  }
})

server.listen(8080, () => console.log('The server is listening at PORT 8080'));
