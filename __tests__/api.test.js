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
