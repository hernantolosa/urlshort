const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connecting to database
connectDB();

app.use(express.json({ extended: false }));

// Defino rutas
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
app.get('/api/sex', (req, res) => {
  res.send('sex')
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
