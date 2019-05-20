require('dotenv').config();

const express = require('express');
const massive = require('massive');
const app = express;

const {SERVER_PORT, CONNECTION_STRING} = process.env;
massive=(CONNECTION_STRING)
.then(dbInstance => {
  app.set('db', dbInstance)
})
.cath(err => console.log(err));

app.use(express.json());



app.listen(SERVER_PORT, () => {
  console.log(`Pepe Meme'in on port ${SERVER_PORT}`);
})


app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.delete('/api/products/:id', products_controller.delete);