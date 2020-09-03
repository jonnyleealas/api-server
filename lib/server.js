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
  res.send('this works maybe');
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
  let soccer = products.filter(obj =>{
    if(obj.id.toString() === req.params.id){
      return obj
    } else{
      return false
    }
  })
  res.status(200).json(soccer[0]);
})

app.put('/products/:id', (req, res)=>{
  let results;
  products.forEach((obj, i) =>{
    if(obj.id == req.params.id){
      results = i;
    }
  })
  products[results] = req.body;
  res.status(200).json(req.body.id)
})

app.delete('/products/:id', (req, res)=>{
  let results;
  products.forEach((obj, i )=>{
    if(obj.id == req.params.id){
      results = i;
    }
  })
  delete products[results];
  res.status(200).json('Request Deleted')
})




app.post('/categories', (req, res)=>{
  products.push(req.body)
  res.status(200).json(req.body)
})

app.get('/categories', (req, res)=>{
  res.json({
    count: categories.length,
    results: categories
  })
})

app.get('/categories/:id', (req, res)=>{
  let megaMan = categories.filter(obj =>{
    if(obj.id.toString() === req.params.id){
      return obj
    } else{
      return false
    }
  })
  res.status(200).json(megaMan[0]);
})

app.put('/categories/:id', (req, res)=>{
  let results;
  categories.forEach((obj, i) =>{
    if(obj.id == req.params.id){
      results = i;
    }
  })
  categories[results] = req.body;
  res.status(200).json(req.body.id)
})

app.delete('/categories/:id', (req, res)=>{
  let results;
  categories.forEach((obj, i )=>{
    if(obj.id == req.params.id){
      results = i;
    }
  })
  delete categories[results];
  res.status(200).json('Request Deleted')
})

app.use(error);
app.use(error500);

const products = [
  {
    inStock: '2',
    id: 3
  },
  {
    name: 'Test1',
    display_name: '2ndTestDisplayName',
    description: '2ndTestDescription',
    id: 4
  },
  {
    name: 'john',
    display_name: '2ndTestDisplayName',
    description: '2ndTestDescription',
    id: 7
  }
]


const categories =[
  {
    name: 'ron',
    display_name: '2ndTestDisplayName',
    description: '2ndTestDescription',
    id: 4
  },
  {
    name: 'Test3',
    display_name: '2ndTestDisplayName',
    description: '2ndTestDescription',
    id: 7
  },
  {
    name: 'john',
    display_name: '2ndTestDisplayName',
    description: '2ndTestDescription',
    id: 8
  }
]


const start = (port)=>{
  app.listen(port,()=>{
    console.log('Listening on Port 3000')
  });
}

module.exports = { app, start };
