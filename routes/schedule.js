const express = require('express');
const router = express.Router();

const schedule = {
  "XI RPL": [
    {
      time: "06:30",
      subject: "Ilmu Pengetahuan Alam Sosial",
      teacher: "Pak Nur Solin",
      room: "Kelas XI RPL"
    },
    {
      time: "08:30",
      subject: "Matapelajaran konsentrasi dan keahlian",
      teacher: "Pak Fanny Yoanda",
      room: "Lab RPL"
    },
    {
      time: "10:30",
      subject: "Pendidikan Agama",
      teacher: "Bapak Hari Purnama",
      room: "Kelas XI RPL"
    },
    {
      time: "12:30",
      subject: "Project kreatif dan kewirausahaan",
      teacher: "Ibu Dahlianah",
      room: "Kelas XI RPL"
    },
    {
      time: "13:30",
      subject: "Bahasa Inggris",
      teacher: "Miss Sarah",
      room: "Kelas XI RPL"
    },
  ]
};

// Route untuk menampilkan jadwal
router.get('/', (req, res) => {
  res.render('schedule', { schedule });
});

module.exports = router;
