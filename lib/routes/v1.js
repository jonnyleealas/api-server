'use strict';
const express = require('express');
const router = express.Router();
const findModel = require("../middleware/getModel.js");

router.param('model', findModel);
router.post('/api/v1/:model', create);
router.get('/api/v1/:model', getAll);
router.get('/api/v1/:model/:id', getOne);
router.put('/api/v1/:model/:id', update); 
router.delete('/api/v1/:model/:id', destroy);

async function create(req, res, next) {
  console.log("req body " , req.body);
  let newRecord = await req.model.create(req.body)
  res.status(200).json(newRecord);
}

async function getAll(req, res, next) {
  let allCategories = await req.model.read();

  res.json({
    count: allCategories.length,
    results: allCategories
  });
}

async function getOne(req, res, next){
  let foundCategory = await req.model.read(req.params.id);
  res.status(200).json(foundCategory);
}

async function update(req, res, next){
  let results = await req.model.update(req.params.id, req.body);
  res.status(200).json(results)
}

async function destroy(req, res, next){
  let deleteId = await req.model.delete(req.params.id);
  res.status(200).json(deleteId)
}

module.exports = router;