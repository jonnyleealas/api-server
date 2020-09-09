'use strict';

const express = require('express');
const app = express();
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error = require('./middleware/404');
const error500 = require('./middleware/500');
const categories = require('./routes/categories');
const products = require('./routes/products');

app.use(express.urlencoded({
  extended:true,
}))

/// Calling my routes
app.use(express.json());
app.use(timeStamp);
app.use(logger);
app.use(categories);
app.use(products);

app.get('/',(req, res, next)=>{
  res.send('this works maybe');
})


app.use(error);
app.use(error500);

const start = (port)=>{
  app.listen(port,()=>{
    console.log('Listening on Port 3000')
  });
}

module.exports = { app, start };
