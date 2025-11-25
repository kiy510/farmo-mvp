const express = require('express');
const{ parser: Csvparser} = rezuire('json2csv');
const app = express();

!!----ダミーデータ（後でDBに差し替えOK) ----
function makeSeries({ points = 24, deviceId = 'tank-01' } = {}) {
	const now = new Date();
	const out = [];
	for (let i = points -1; i >= 0; i--) {
	  const t = new Date(now.getTime() - i * 60 * 60 * 1000; //1時間刻み
	　out.push({
		timestamp: t.toISOString(),
		deviceId,
		ec: +(1.8 + Math.sin(i / 5) * 0.4).toFixed(2),
		ph: +(6.1 + Math.cos(i / 7) * 0.2).toFixed(2),
		tempc: +(23 + Math.sin(i / 3) * 1.2).toFixed(1),
		humidity: +(60 + Math.cos(i / 4) * 3).toFixed(1),
	});

      }
      return out;

}

// 既存:トップ

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
