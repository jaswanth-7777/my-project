const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'TV', price: 120000 },
  { id: 2, name: 'Laptop', price: 250000 },
  { id: 3, name: 'Mobile', price: 45000 },
  { id: 4, name: 'Cooler', price: 9000 },
  { id: 5, name: 'Headphones', price: 800 }
];

app.get('/api/products', (_req, res) => {
  res.json(products);
});

app.get('/', (_req, res) => {
  res.send('API running. Try GET /api/products');
});

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
