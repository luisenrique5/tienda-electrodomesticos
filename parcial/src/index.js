const express = require('express');
const app = express();
const path = require('path');
const indexController = require('./controller/index.controller');
const connection = require('./dbConnection/connection');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', indexController.index);
app.post('/register', indexController.register); // Ruta para el registro

connection().then(() => {
  app.listen(3000, () => {
    console.log('Servidor a la espera');
  });
}).catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
});




//mongodb+srv://luisito25:<password>@cluster0.hjvlgkt.mongodb.net/?retryWrites=true&w=majority