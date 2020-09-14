'use strict';

const express = require('express');
const router = express.Router();
const getModel = require('../middleware/getModel')
const chalk = require('chalk');


router.param('model', getModel)

router.post('/:model',create);
router.get('/:model', getAll);
router.get('/:model/:id', getOne);
router.put('/:model/:id', update);
router.delete('/:model/:id', destroy);

// find the right model
// function getModel(req, res, next){
//     const modelName = req.params.model;
//     if( modelName === 'categories'){
//         req.model = catModel
//         } else if (modelName === 'products'){
//         req.model = prodModel
//         }
//     next()
// }

async function create(req, res, next){
  
  let newRecord = await req.model.create(req.body)
  console.log(`${chalk.green('YOU JUST CREATED')}`, newRecord);
  res.status(200).json(newRecord);
}

async function getAll(req, res, next){
  let allCategories = await req.model.read();
  let output = {
        count: allCategories.length,
        allCategories
  }
  console.log(`${chalk.green('HERE ARE YOUR RECORDS')}`, output);
  res.status(200).json(output);
}

async function getOne(req, res,next){
  let foundCategory = await req.model.read(req.params.id);
  console.log(`${chalk.green('HERE IS WHAT WE HAVE')}`, foundCategory);
  res.status(200).json(foundCategory);
}

async function update(req, res, next){
  let results = await req.model.update(req.params.id, req.body);
  console.log(`${chalk.green('UPDATED')}`, results);
  res.status(200).json(results)
}

async function destroy(req, res, next){
  let deleteId = await req.model.delete(req.params.id);
  console.log(`${chalk.red('YOU JUST DELETED')}`, deleteId);
  res.status(200).json(deleteId);
}


module.exports = router;
