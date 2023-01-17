const mongoose = require('mongoose')
const unique = require('mongoose-unique-validator')
const personSchema = mongoose.Schema({
   
    nom:{type:String,required:true},
    prenom :{type:String,required:true },
    sexe:{type:String,required:true},
    filiere :{type:String,required:true},
    ville :{type:String,required:true},
    email :{type:String,required:true,unique:true},
    password:{type:String,rrequired:true}
});
    personSchema.plugin(unique)
module.exports = mongoose.model('person',personSchema);
