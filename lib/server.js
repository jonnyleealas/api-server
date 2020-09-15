'use strict';

const express = require('express');
const app = express();
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error = require('./middleware/404');
const error500 = require('./middleware/500');
const v1 = require('./routes/v1.js')

app.use(express.urlencoded({
  extended:true,
}))
// express.json has to run before routes
app.use(express.json());
/// Calling my routes
app.use(v1);
app.use(timeStamp);
app.use(logger);

// app.get('/',(req, res, next)=>{
//   res.send('this works maybe');
// })

app.use(error);
app.use(error500);

const start = (port)=>{
  app.listen(port,()=>{
    console.log('Listening on Port 3000')
  });
}

module.exports = { app, start };
