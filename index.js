const express = require('express');
let mysql = require('mysql2');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3309',
  password: '@21baplanGGG',
  database: 'mahasiswa'
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to Mysql: ' + err.stack);
    return;
  }
  console.log('Connected to Mysql successfully');
});

// --- METHOD GET: AMBIL DATA MAHASISWA ---
app.get('/biodata', (req, res) => {
  const sql = 'SELECT * FROM biodata';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
    } else {
      res.json(results);
    }
  });
});

