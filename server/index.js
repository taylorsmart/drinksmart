// Request Parsing
const express = require('express');

const app = express();
const cors = require('cors');

// Getting Serial Value
var serialValue = 10.0;
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

port.on('open', ()=> {
	console.log('serial port is open');
});
parser.on('data', data=> {
	// TAYLOR -- Add error handling in case it doesn't return a float for some reason.
	serialValue = parseFloat(data);
	console.log('got word from arduino: ', serialValue);
});


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
  res.status(200).send({scaleValue: serialValue})
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

