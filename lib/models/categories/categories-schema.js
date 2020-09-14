'use strict';

const mongoose = require('mongoose');
const Model = require('../mongo-model')

const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});


// the .model portion gives you all the save methods
const categoriesSchema = mongoose.model('categories', categories);

module.exports = new Model(categoriesSchema);
