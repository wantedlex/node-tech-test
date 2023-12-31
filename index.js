// Module imports
const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

// Server init
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});