const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello GitHub Actions!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for testing

