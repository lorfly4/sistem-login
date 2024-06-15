const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'INPUT HOST',
  user: 'INPUT USERNAME DATABASE ANDA',
  password: 'INPUT PASSWORD DATABASE ANDA (JIKA TIDAK ADA TIDAK PERLU KOSONGKAN SAJA)',
  database: 'INPUT NAMA DATABASE ANDA'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
