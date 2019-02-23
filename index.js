//Require packages

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

//Controllers
const productsController = require('./controllers/products_controller');

//Deconstruct variables
const {
    PORT,
    CONNECTION_STRING,
} = process.env;

//Middleware
const app = express();
app.use(bodyParser.json());

//Database connection
massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log(app)
}).catch(() =>{
    console.log('failed')
});

//Products table end-points
app.get('/api/products', productsController.getAll);
app.get('/api/products/:id', productsController.getOne);
app.put('/api/products/:id', productsController.update);
app.post('/api/products', productsController.create);
app.delete('/api/products/:id', productsController.delete);

//Get server listening on a port
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});