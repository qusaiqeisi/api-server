'use strict';
const {app} = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(app);


let reqBody={
    id:1,
    nameFood:"pizza",
    customerId:"1",
    drink:"7ahh"}

let obj ={
    
    name:'qusai'
}



//add the name of the module that I am testing 
describe('my API Server', ()=> {

    




    it('200 get route /', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        
    
    });
    

    //==============testing============== for food 
   
    
    

    it('Create a record using POST Food ', async () => {
       
        const response = await request.post('/food').send(reqBody); // async
        expect(response.status).toEqual(200);
      
        
    
    });

    it('Read a record using GET for Food', async () => {
        const response = await request.get('/food'); // async
        expect(response.status).toEqual(200);
        
    
    });
    
    it('Update a record using PUT Food', async () => {
        const response = await await request.put('/food/2').send(reqBody); // async
        expect(response.status).toEqual(200);
        
    
    });
    it('Destroy a record using DELETE Food', async () => {
        const response = await request.delete('/food/2'); // async
        expect(response.status).toEqual(200);
        
    
    });

    //==================testing========== for customer 
    
    it('Create a record using POST customer ', async () => {
       
        const response = await request.post('/customer').send(obj); // async
        expect(response.status).toEqual(200);
      
        
    
    });

    it('Read a record using GET for customer', async () => {
        const response = await request.get('/customer'); // async
        expect(response.status).toEqual(200);
        
    
    });
    
    it('Update a record using PUT customer', async () => {
        const response = await await request.put('/customer/1').send(obj); // async
        expect(response.status).toEqual(200);
        
    
    });
    it('Destroy a record using DELETE customer', async () => {
        const response = await request.delete('/customer/1'); // async
        expect(response.status).toEqual(200);
        
    
    });


});