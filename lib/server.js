'use strict';

const express = require('express');
const app = express();
const timeStamp = require('./middleware/timestamp')
const logger = require('./middleware/logger');
const error = require('./middleware/404');
const error500 = require('./middleware/500');
app.use(express.urlencoded({
  extended:true,
}))
app.use(express.json());
app.use(timeStamp);
app.use(logger);
app.get('/',(req, res, next)=>{
  res.send('fuk you');
})


app.post('/products', (req, res)=>{
  products.push(req.body)
  res.status(200).json(req.body)
})
app.get('/products', (req, res)=>{
  res.json({
    count: products.length,
    results: products
  })
})
app.get('/products/:id', (req, res)=>{
  let apple = products.filter(obj =>{
    if(obj.id === req.params.id){
      return true
    }
  })
  res.json(apple[0]);
})
app.put('/products/:id', (req, res)=>{

})
app.delete('/products/:id', (req, res)=>{

})
///////////////////////////////////////////
app.post('/categories', (req, res)=>{

})
app.get('/categories', (req, res)=>{

})
app.get('/categories/:id', (req, res)=>{

})
app.put('/categories/:id', (req, res)=>{

})
app.delete('/categories/:id', (req, res)=>{

})

/////////////////////////////////////////////
app.use(error);
app.use(error500);
/////////////////////////////////////////////


const products=[
  {
    inStock: "2",
    id: 3
  },
  {
    name: "Test1",
    display_name: "2ndTestDisplayName",
    description: "2ndTestDescription",
    id: 4
  },
  {
    name: "john",
    display_name: "2ndTestDisplayName",
    description: "2ndTestDescription",
    id: 7
  }
]


const categories =[
  {
    name: "ron",
    display_name: "2ndTestDisplayName",
    description: "2ndTestDescription",
    id: 4
  },
  {
    name: "Test3",
    display_name: "2ndTestDisplayName",
    description: "2ndTestDescription",
    id: 7
  },
  {
    name: "john",
    display_name: "2ndTestDisplayName",
    description: "2ndTestDescription",
    id: 8
  }
]



const start = (port)=>{
  app.listen(port,()=>{
    console.log('Listening on Port 3000')
  });
}

module.exports = { app, start };
