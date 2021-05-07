const express = require('express');
const massive = require('massive');
require('dotenv').config();
const {create, getOne, getAll, update, productDelete } = require('./products_controller')
// const path = require('path');

const app = express();

massive ({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
    .then((dbInstance) => {
        app.set('db', dbInstance);
})
.catch((e) => {console.log(e)})

app.use(express.json())

// const staticPath = path.join(__dirname, "../public")
// app.use(express.static(staticPath));

app.get('/api/products', getAll);
app.get('/api/products/:id', getOne);
app.put('/api/products/:id', update);
app.post('/api/products', create);
app.delete('/api/products/:id', productDelete);

app.listen(process.env.SERVER_PORT, () => (console.log(`Running on ${process.env.SERVER_PORT}`)));