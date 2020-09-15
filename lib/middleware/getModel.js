'use strict';

const categories = require('../models/categories/categories-schema');
const products = require('../models/products/products-schema');
function getModel(req, res, next){
  let model = req.params.model;
  switch(model){
  case 'categories':
    req.model = categories;
    break;

  case 'products':
    req.model = products;
    break;

  default:
    next('Not A valid route');

  }
  next();
}
module.exports = getModel;
