'use strict';

const express = require('express');
const app = express();
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error = require('./middleware/404');
const error500 = require('./middleware/500');


const apiRoutes = require('./routes/api-routes');


app.use(express.urlencoded({

  extended:true,
}))
// need express.json to parse the body
app.use(express.json()); 
/// Calling my routes
app.use(timeStamp);
app.use(logger);
app.use('/api/v1/',apiRoutes);


app.get('/',(req, res, next)=>{
  res.send('I AM IRON MAN');
})


app.use(error);
app.use(error500);

const start = (port)=>{
  app.listen(port,()=>{
    console.log('Listening on Port 3000')
  });
}

module.exports = { app, start };
