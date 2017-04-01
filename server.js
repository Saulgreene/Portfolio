'use strict';

// Load Express
const express = require('express');
const requestProxy = require('express-request-proxy');
// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT ||  3000;

// Define which directory we will serve static files from
app.use(express.static('./public'));

// Here is one way to set up a route... bats...
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

// REVIEW: This is a new route that will utilize our middle man proxy.
app.get('/github/*', proxyGitHub);
app.listen(PORT, function(){
  console.log('Your app is served on local host 3000');
})
