'use strict';

const schema = require('./products-schema.js');
const Model = require('../mongo.js');

class ProductsCollections {
  create(obj){
    let record = new schema(obj);
    return record.save();
  }
  read(id){
    return schema.findById({"_id": id});
  }
  readAll(){
    return schema.find();
  }
  update(id,obj){
    return schema.findByIdAndUpdate({"_id": id}, {...obj})
  }
  delete(id){
    return schema.findByIdAndDelete({"_id": id})
  }
}

module.exports = new ProductsCollections();
