const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));
app.use(express.json());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'user',
    password: 'admin',
    database: 'walfenstein',
});


app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log("hewwo");

    res.json({message: 'sucess'})
/*     const sql = 'INSERT INTO people (name, email) VALUES (?, ?)';
    pool.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).json({ error: 'Error inserting data' });
        }
        console.log('Inserted ' + result.affectedRows + ' row(s)');
        res.json({ message: 'User registered successfully' });
    }); */
});



app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ?';
    pool.query(sql, [username], (err, results) => {
        if (err) {
            console.error('Error retrieving user:', err.message);
            return res.status(500).json({ error: 'Error retrieving user' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }

        const user = results[0];
        if (password === user.password) { 
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Incorrect password' });
        }
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
