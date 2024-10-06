const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Root route for testing
app.get('/', (req, res) => {
  res.send('Dice Roller API is running.');
});

// REST API to roll dice 5 times
app.get('/roll-dice', (req, res) => {
  const rolls = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Roll the dice
    rolls.push(randomNumber); // Store the result in the rolls array
  }
  res.json({ results: rolls }); // Return the results as a JSON response
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
