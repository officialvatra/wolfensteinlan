const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

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
    user: 'root',
    password: 'Admin',
    database: 'wolfensteinDB',
});


app.post('/signup', (req, res) => {
    const { name, email } = req.body;
    console.log("hewwo");

    
    const sql = 'INSERT INTO people (name, email) VALUES (?, ?)';
    pool.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).json({ error: 'Error inserting data' });
        }
        console.log('Inserted ' + result.affectedRows + ' row(s)');
        res.json({ message: 'User registered successfully' });
    });
});



app.post('/login', (req, res) => {
    const { username, pwd } = req.body;
    

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
        if (pwd === user.password) { 
            let logged = true;
            res.json({ message: 'Login successful', logged });
        } else {
            res.status(401).json({ error: 'Incorrect password' });
        }
    });
});

app.post('/getlist', (req, res) => {

    const sql = 'SELECT * FROM people';
    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Error retrieving users:', err.message);
            return res.status(500).json({ error: 'Error retrieving users' });
        } else {
            const userList = results;
            console.log(userList);
            res.json({ userList });
        }

    });
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
