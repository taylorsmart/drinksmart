// Request Parsing
const express = require('express');

const app = express();
const cors = require('cors');

// Middleware Execution
app.use(express.json());

// Configure Cors policy
app.use(cors());

// Server Port
const PORT = 3000;
app.set('port', PORT);

// Collect static file directory
app.use(express.static(__dirname + '/../client/dist'));

// Set up our Get
app.get('/scaleData', (req, res) => {
  // BRYAN - You are we anticipating errors here?  If so, I can shift this to account...
  res.status(200).send({scaleValue: 10.0})
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

