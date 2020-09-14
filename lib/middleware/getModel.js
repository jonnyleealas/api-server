'use strict';
const catModel = require('../models/categories/categories-schema')
const prodModel = require('../models/products/products-schema')

function getModel(req, res, next){
  let model = req.params.model;
  switch(model){
  case 'categories': {
    req.model = catModel;
    break;
  }
  case 'products': {
    req.model = prodModel;
    break;
  }
  default:
    next('NOT A VALID ROUTE')

  }
  next();
}



// DO NOT PRELOAD models
// look at the req.params.model
// is that model a real thing?
// if so, load it
//  put it on a request
// if not, error out


module.exports = getModel;
