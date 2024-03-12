const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'basketball_stats',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(bodyParser.json());

app.post('/addPlayer', (req, res) => {
  const playerData = req.body;
  const sql = 'INSERT INTO players SET ?';

  db.query(sql, playerData, (err, result) => {
    if (err) {
      console.error('Error inserting player:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log('Player inserted:', result);
    res.status(200).send('Player inserted successfully');
  });
});

app.get('/getPlayers', (req, res) => {
  const sql = 'SELECT * FROM players';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching players:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log('Players fetched:', result);
    res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
