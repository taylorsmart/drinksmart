// Request Parsing
const express = require('express');

const app = express();
const cors = require('cors'),
	ip = require('ip');

var i2c = require('i2c-bus'),
	font = require('oled-font-5x7'),
	i2cBus = i2c.openSync(1),
	oled = require('oled-i2c-bus');
var oled_opts = {
	width: 128,
	height: 64,
	address: 0x3c
};
var display = new oled(i2cBus, oled_opts);
display.clearDisplay();
display.setCursor(20, 6);
display.writeString(font, 1, 'Welcome to the ');
display.setCursor(36, 16);
display.writeString(font, 1, 'KenTTiki');
display.setCursor(20, 24);
display.writeString(font, 1, 'Bar and Lounge');

display.setCursor(2, 40);
display.writeString(font, 1, 'Please visit:  http:// ');
display.setCursor(2, 48);
ip_addr = ip.address();
display.writeString(font, 1, ip_addr + ':3000');
display.setCursor(2, 55);
display.writeString(font, 1, 'for the drinks menu.');


// Getting Serial Value
var serialValue = 10.0;
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
// const port = new SerialPort('COM3', { baudRate: 9600 });
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 }, (err)=> {
	if (err) {
	  console.log('unable to open serial port.\n' + err);
	}
   });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

port.on('open', ()=> {
	console.log('serial port is open');
});
parser.on('data', data=> {
	// TAYLOR -- Add error handling in case it doesn't return a float for some reason.
	serialValue = parseFloat(data);
	if (isNaN(serialValue)) {
		console.log('serial returned '+data+' which is NaN');
		serialValue = -1.;
	}
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
