'use strict';

const express = require('express');
const products = require('../models/products/products-collections');
const router = express.Router();

router.post('/products', create)
router.get('/products', getAll);
router.get('/products/:id', getOne);
router.put('/products/:id',update);
router.delete('/products/:id', destroy);

async function create(req,res, next){
  let newRecord = await products.create(req.body);
  res.status(200).json(newRecord);
}

async function getAll(req, res, next){
  let allProducts = await products.readAll();
  res.json({
    count: allProducts.length,
    results: allProducts
  });
}

async function getOne(req, res,next){

  let foundProduct = await products.read(req.params.id);
  res.status(200).json(foundProduct);
}

async function update(req, res, next){
  let results = await products.update(req.params.id, req.body)
  res.status(200).json(results);
}

async function destroy(req, res, next){
  let deleteId = await products.delete(req.params.id);
  res.status(200).json('Request Deleted', deleteId);
}




module.exports = router;
