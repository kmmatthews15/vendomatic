// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
// Server
const app = express();
const PORT = 4000;

// Request body
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/inventory', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

// Define Routes
app.use(routes);

// Send every other request to the React App
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../vend-o-matic/public/index.html'));
});

// Listener
app.listen(PORT, function() {
   console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
   );
});