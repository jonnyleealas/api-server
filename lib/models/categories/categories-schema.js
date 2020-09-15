'use strict';

const mongoose = require('mongoose');
const Model = require('../mongo.js')

const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const categoriesSchema = mongoose.model('categories', categories);
module.exports = new Model(categoriesSchema)
