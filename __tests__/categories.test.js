'use strict';
const supergoose = require('@code-fellows/supergoose');

const categories= require('../lib/models/categories/categories-schema');

describe('Categories Schema', ()=>{
    it('can create a catergory', async ()=>{
        let obj = {
             name:  'carrots',
             description: 'food'
        }
        let carrots = await categories.create(obj);
        expect(carrots.name).toEqual(obj.name)
        expect(carrots.description).toEqual(obj.description)
        
    })
})