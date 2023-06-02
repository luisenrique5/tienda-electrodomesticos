const mongoose = require('mongoose');

const password = 'luisito25';
const dbname = 'empresa_tecnologica';
const uri = `mongodb+srv://luisito25:${encodeURIComponent(password)}@cluster0.hjvlgkt.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = () => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });
