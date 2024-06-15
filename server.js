const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const scheduleRoutes = require('./routes/schedule')
const dashboardRoutes = require('./routes/dashboard')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

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
// Endpoint untuk mendapatkan history belajar
app.get('/api/history', (req, res) => {
  // Ambil data mapel dari schedule
  const mapels = schedule["XI RPL"].map(item => ({
    subject: item.subject,
    time: item.time,
    teacher: item.teacher
  }));

  // Mengembalikan response sebagai JSON
  res.json(mapels);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/login', (req, res) => {
  res.render('login'); // Gantilah 'login' dengan nama file atau template yang sesuai
});

app.use('/auth', authRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/auth', dashboardRoutes);

// Halaman utama
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


