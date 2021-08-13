'use strict';

const express = require('express');

const router = express.Router();

const {customerCollection} = require('../models/index');

// add routes
router.get('/customer', getCustomer);
router.post('/customer', createCustomer);
router.put('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer);


async function getCustomer(req, res) {
    // get me all data from people
    let customer = await customerCollection.read();
    res.status(200).json(customer);
}

async function createCustomer(req, res) {
    let newCustomer = req.body;
    let customer = await customerCollection.create(newCustomer);
    res.status(200).json(customer);
}


async function updateCustomer(req, res) {
    let id=req.params.id
    let updateCustomer = req.body;
    let customer = await customerCollection.update(id,updateCustomer);
    res.status(200).json(customer);
}


async function deleteCustomer(req, res) {
    let id=req.params.id
    let customer = await customerCollection.delete(id);
    res.status(200).json(customer);
}



module.exports = router;