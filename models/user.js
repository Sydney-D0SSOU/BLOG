const mongoose = require('mongoose')
const Userschema = mongoose.Schema({
    nom:{type:String,required:true},
    prenom :{type:String,required:true },
    sexe:{type:String,required:true},
    filiere :{type:String,required:true},
    ville :{type:String,required:true},
    email :{type:String,required:true},
    password:{type:String,rrequired:true}
});
module.exports = mongoose.model('user',Userschema);