const express = require('express')
const { route } = require('./routes/index.routes')
const index = express()

index.use(require('./routes/index.routes'))

index.listen(3000, ()=>{
  console.log('servidor a la espera ')
})