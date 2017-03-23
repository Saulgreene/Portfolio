'use strict';

// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT ||  2000;

// Define which directory we will serve static files from
app.use(express.static('./public'));

// Here is one way to set up a route... bats...
app.listen(PORT, function(){
  console.log('Your app is served on local host 2000');
})
