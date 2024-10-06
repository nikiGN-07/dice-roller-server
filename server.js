const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*'
}));

// Root route for testing
app.get('/', (req, res) => {
  res.send('Dice Roller API is running.');
});

// REST API to roll dice
app.get('/roll-dice', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  res.json({ result: randomNumber });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
