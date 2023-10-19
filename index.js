// Module imports
const express = require('express');

const app = express();
const port = 3000;

// Controllers
const artistsCTRL = require('./controllers/tracks.controller.js');

app.use('/tracks', artistsCTRL);

// Server init
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});