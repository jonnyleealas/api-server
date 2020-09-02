'use strict';

module.exports = (req, res, next)=>{
  const time = new Date().toString().slice(0,24);
  req.requestTime = time;
  next();
}
