const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

app.get('/api/readings', (req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    deviceId: "tank-01",
    ec: 2.1,
    ph: 6.2,
    tempC: 23.5,
    humidity: 61.2
  });
});

app.use(express.static('public'));
