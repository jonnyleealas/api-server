'use strict';

const express = require('express');
const categories = require('../models/categories/categories-collections');

const router = express.Router();


router.post('/categories',create);
router.get('/categories', getAll);
router.get('/categories/:id', getOne);
router.put('/categories/:id', update);
router.delete('/categories/:id', destroy);

async function create(req, res, next){
  let newRecord = await categories.create(req.body)
  res.status(200).json(newRecord);
}

async function getAll(req, res, next){
  let allCategories = await categories.readAll();
  res.json({
    count: allCategories.length,
    results: allCategories
  });
}

async function getOne(req, res,next){
  let foundCategory = await categories.read(req.params.id);
  res.status(200).json(foundCategory);
}

async function update(req, res, next){
  let results = await categories.update(req.params.id, req.body);
  res.status(200).json(results)
}

async function destroy(req, res, next){
  let deleteId = await categories.delete(req.params.id);
  res.status(200).json('Request Deleted', deleteId)
}


module.exports = router;
