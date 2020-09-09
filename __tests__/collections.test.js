'use strict';

const { app } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(app);
const collections = require('../lib/models/categories/categories-collections')

describe('Must create a new category', ()=>{

    let 

})