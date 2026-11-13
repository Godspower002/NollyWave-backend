require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    platform: 'NollyWave',
    message: 'Entertainment Without Borders',
    status: 'online'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    platform: 'NollyWave'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`NollyWave backend running on port ${PORT}`);
});
