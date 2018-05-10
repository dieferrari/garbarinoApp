const express = require('express');
const app = express();
const path = require('path');
const products = require('./seed')

// sending all products for a request to the specified route. The data has been imported from a 'seed' file where the data for this exercise is.
app.get('/api/products', function (req, res){
  res.send(products)
})

// if the URL doesn't match any route, by default it sends the index.html
app.use(express.static('./public'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(3001, () => console.log('Listening on port 3001'));

module.exports = app;
