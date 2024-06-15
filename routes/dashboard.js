const express = require('express');
const router = express.Router();

// Rute untuk halaman dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard'); // Ganti 'dashboard' dengan nama file atau template yang sesuai
});

module.exports = router;
