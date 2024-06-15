const express = require('express');
const connection = require('../db');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

// Halaman login
router.get('/login', (req, res) => {
  res.render('login');
});

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validasi user
  connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Jika berhasil login
    res.status(200).json({ message: 'Login successful', user: results[0] });
  });
});

// Dashboard route
router.get('/dashboard', (req, res) => {
  // Render dashboard
  res.render('dashboard');
});

module.exports = router;
