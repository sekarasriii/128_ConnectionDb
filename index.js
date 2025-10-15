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

