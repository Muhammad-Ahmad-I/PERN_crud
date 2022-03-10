const express = require('express');
const { getAllGigs, addNewGig } = require('../controller/gigController.js');
const route = express.Router();

route.get('/', getAllGigs);
route.post('/add', addNewGig);

module.exports = route;
