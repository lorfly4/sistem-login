const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Baca data pengguna dari file JSON
const usersPath = path.join(__dirname, '../users.json');
let users = JSON.parse(fs.readFileSync(usersPath, 'utf8')).users;

// Endpoint untuk login
router.post('/login', (req, res) => {
  const { name, password } = req.body;
  const user = users.find(u => u.username === name && u.password === password);
  res.redirect('/auth/dashboard')
  
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
