const mongoose = require('mongoose');
const User = require('../models/user.model'); // Importa el modelo de usuario

const controller = {};

controller.index = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
};

controller.register = async (req, res) => {
  try {
    const { nombre, apellido, email, direccion, cargo, salario, password } = req.body;
    
    // Crea una instancia del modelo de usuario con los datos del formulario
    const newUser = new User({
      nombre,
      apellido,
      email,
      direccion,
      cargo,
      salario,
      password
    });

    // Guarda el usuario en la base de datos
    await newUser.save();

    res.send('Registro exitoso');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al registrar el usuario');
  }
};

module.exports = controller;
