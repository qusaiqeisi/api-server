'use strict';

const express = require('express');

const router = express.Router();

const {foodCollection} = require('../models/index');

// add routes
router.get('/food', getFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getFood(req, res) {
    // get me all data from people
    let food = await foodCollection.read();
    res.status(200).json(food);
}

async function createFood(req, res) {
    let newFood = req.body;
    let food = await foodCollection.create(newFood);
    res.status(200).json(food);
}

async function updateFood(req, res) {
    let id=req.params.id
    let updateFood = req.body;
    let food = await foodCollection.update(id,updateFood);
    res.status(200).json(food);
}


async function deleteFood(req, res) {
    let id=req.params.id
    let food = await foodCollection.delete(id);
    res.status(200).json(food);
}


module.exports = router;