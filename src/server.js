
'use strict';
// 1st level packages -> we did not install anything
// 3rd party packages
const express = require('express');
// local modules
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const foodRoutes = require('./routes/food');
const customerRoutes = require('./routes/customer');

const app = express();
// Global Middlewares
app.use(express.json()); // access the body
// app.use(cors()); install the package
app.use(logger);
// Use our routes form the routing module -> customer, order
app.use(foodRoutes);
app.use(customerRoutes);

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.use('/',(req,res)=>{
    res.send('hello i am a live ')
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}