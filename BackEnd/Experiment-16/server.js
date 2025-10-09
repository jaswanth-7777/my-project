const express = require('express');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

const app = express();
const PORT = 3000;

app.use(logger);

app.get('/public', (req, res) => {
  res.status(200).send("This is a public route. No authentication required.");
});

app.get('/protected', auth, (req, res) => {
  res.status(200).send("You have accessed a protected route with a valid Bearer token!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Welcome! Try /public or /protected routes.');
});