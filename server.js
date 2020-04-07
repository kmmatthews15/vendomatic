// Dependencies
const http = require('http'),
   express = require('express'),
   bodyParser = require('body-parser'),
   cors = require('cors'),
   errorhandler = require('errorhandler'),
   mongoose = require('mongoose');

// Creates global app project
const app = express();

let isProduction = process.env.NODE_ENV === 'development';

// Request body
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
if (!isProduction) {
   app.use(errorhandler());
}

if (isProduction) {
   mongoose.connect(process.env.MONGODB_URI);
} else {
   mongoose.connect('mongodb://localhost/inventory');
   mongoose.set('debug', true);
}


// Define Routes
app.use(require('./routes'));

require('./models/inventory.model');

// Prepare static assests for production
if(process.env.NODE_ENV === 'production') {
   // Set build folder static
   app.use(express.static('client/build'));
   // Catch all for not pre-defined html requests to load index.html
   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
   });
}

 
app.use(express.static(__dirname + './public'));

// Listener
// finally, let's start our server...
const server = app.listen(process.env.PORT || 8099, function () {
   console.log('Listening on port ' + server.address().port);
});