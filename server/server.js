const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

const corsoptions = {
    origin: '*',
    methods: 'GET,POST,DELETE'
}


app.use(cors(corsoptions));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'admin',
  database: 'walfenstein'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

app.use(express.json());


app.post('/api/signup', (req, res) => {
  const { name, email } = req.body;


  const sql = 'INSERT INTO people (name, email) VALUES (?, ?)';
  connection.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.message);
      res.status(500).json({ error: 'Error inserting data' });
      return;
    }
    console.log('Inserted ' + result.affectedRows + ' row(s)');
    res.json({ message: 'Data inserted successfully' });
  });
});

app.post('/api/login', (req, res) => {
    const { username, pwd } = req.body;
  
  
    const sql = 'INSERT INTO users (username, pwd) VALUES (?, ?)';
    connection.query(sql, [username, pwd], (err, result) => {
      if (err) {
        console.error('Error inserting data: ' + err.message);
        res.status(500).json({ error: 'Error inserting data' });
        return;
      }
      console.log('Inserted ' + result.affectedRows + ' row(s)');
      res.json({ message: 'Data inserted successfully' });
    });
  });
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
