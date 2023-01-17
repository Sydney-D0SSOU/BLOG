const express = require('express');
const mongoose = require ('mongoose');
const bodyparser = require('body-parser');
const product = require('./models/product');
const user = require('./models/person');
const productrouter = require('./routes/product');
const personrouter = require('./routes/person');
const app = express()
const port = 3001
app.use(express.json());
mongoose.set('strictQuery', true);
app.listen(port, () => {
  console.log(` serveur en ecoute sur le port : ${port}`)
  
})
db_url = 'mongodb+srv://blog123:blog123@cluster0.ixgvyv9.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_url)
.then((result)=>{
  console.log('connexion avec succes a la BDD');

})
.catch((err)=>{
  console.log(err);
});
app.use(express.urlencoded({extended :true}));
app.use(bodyparser.json());
  app.use('/blog' ,productrouter);
  app.use('/auth',personrouter);

  module.exports =app ;