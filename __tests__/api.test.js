'use strict'

const { app } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(app);



describe('Testing get methods', () => {

  it('It Should Get Products', () => {
    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200)
      })
  })

  it('It should get Categories', () => {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200)
      })
  })

  it('It should get Product/:id',() => {
    return mockRequest
      .get('/products/:id')
      .then(results => {
        expect(results.status).toBe(200)
      })
  })

  it('It should get Categories/:id',() => {
    return mockRequest
      .get('/categories/:id')
      .then(results => {
        expect(results.status).toBe(200)
      })
  })
})


describe('Testing error', ()=>{

  it('It should respond with 404 on bad route', () => {
    return mockRequest
      .get('/badroute')
      .then(results => {
        expect(results.status).toBe(404);
      })
  })
})

describe('Testing Post', () => {

  it('It should respond with status 200', () => {
    return mockRequest
      .post('/products')
      .then(results => {
        expect(results.status).toBe(200);
      })
  })

  it('It should respond with status 200', () => {
    return mockRequest
      .post('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
  })
})

describe('Testing Delete', () => {

  it('It should respond with status 200', () => {
    return mockRequest
      .delete('/products/:id')
      .then(results => {
        expect(results.status).toBe(200)
      })
  })

  it('It should respond with status 200', () => {
    return mockRequest
      .delete('/categories/:id')
      .then(results => {
        expect(results.status).toBe(200)
      })
  })
})


