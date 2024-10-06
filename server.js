// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/roll', (req, res) => {
    const rolls = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    res.json({ rolls });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
