const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// --- New Root Route ---
app.get('/', (req, res) => {
  res.send('API is Working!');
});
// ------------------------

// In-memory data store for playing cards
let cards = [
  { id: 1, suit: 'Hearts', value: 'Ace' },
  { id: 2, suit: 'Spades', value: 'King' },
  { id: 3, suit: 'Diamonds', value: 'Queen' },
];

// GET /cards - Get all cards
app.get('/cards', (req, res) => {
  res.json(cards);
});

// GET /cards/:id - Get a single card by ID
app.get('/cards/:id', (req, res) => {
  const cardId = parseInt(req.params.id);
  const card = cards.find(c => c.id === cardId);
  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ message: 'Card not found' });
  }
});

// POST /cards - Add a new card
app.post('/cards', (req, res) => {
  const newCard = {
    id: cards.length > 0 ? Math.max(...cards.map(c => c.id)) + 1 : 1,
    suit: req.body.suit,
    value: req.body.value,
  };
  if (!newCard.suit || !newCard.value) {
    return res.status(400).json({ message: 'Missing suit or value' });
  }
  cards.push(newCard);
  res.status(201).json(newCard);
});

// DELETE /cards/:id - Delete a card by ID
app.delete('/cards/:id', (req, res) => {
  const cardId = parseInt(req.params.id);
  const cardIndex = cards.findIndex(c => c.id === cardId);
  if (cardIndex !== -1) {
    const [removedCard] = cards.splice(cardIndex, 1);
    res.json({ message: `Card with ID ${cardId} removed`, card: removedCard });
  } else {
    res.status(404).json({ message: 'Card not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});