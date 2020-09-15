'use strict';



class Model {
  constructor(schema){
    this.schema = schema;
  }
  create(obj){
    let record = new schema(obj)
    return record.save();
  }
  read(id){
    if (id) {
      return this.schema.findById({"_id": id});
    } else {
      return this.schema.find({});
    }
  }
  
  update(id,obj){
    return this.schema.findByIdAndUpdate({"_id": id}, {...obj})
  }
  delete(id){
    return this.schema.findByIdAndDelete({"_id": id})
  }
}

module.exports = Model;

