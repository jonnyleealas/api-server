'use strict';

module.exports = (req, res, next)=>{
  console.log('METHOD:',req.method,'ROUTE:', req.path, req.requestTime);
  next();
}
