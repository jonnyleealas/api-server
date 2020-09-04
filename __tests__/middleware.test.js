'use strict'
const logger = require('../lib/middleware/logger.js');
const timestamp = require('../lib/middleware/timestamp.js');


describe('testing middleware', () => {

  let req = {}
  let res = {}
  let next = jest.fn();
  let consoleSpy;

beforeEach(() => {
    consoleSpy = jest.spyOn(console,'log').mockImplementation()
  });

afterEach(() => {
    consoleSpy.mockRestore()
  })


  it('It should console.log', () => {
    logger(req,res,next)
    expect(consoleSpy).toHaveBeenCalled()
  })

  it('should move to the next middleware', () => {

    logger(req,res,next)
    expect(next).toHaveBeenCalledWith()
  })

  it('Should add the timestamp', () => {

    timestamp(req,res,next)
    expect(req.requestTime).not.toBeNull()
  })

  it('should move to the next middlware', () => {

    timestamp(req,res,next)
    expect(next).toHaveBeenCalledWith();
  })
})
