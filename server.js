const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('./public'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//hacer un app.get a '/api/products' para servir la data que me pasaron del challenge. Hago un res.send de la variable PRODUCTS que va a estar importada del archivo SEED al mismo nivel de SERVER.JS



// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(3001, () => console.log('Listening on port 3001'));

module.exports = app;
