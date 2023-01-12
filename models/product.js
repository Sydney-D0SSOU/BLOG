const mongoose = require('mongoose')
const ProductSchema =mongoose.Schema({
    nom:{type:String,require:true},
    categorie: {type:String,required:true},
    prix:{type:Number,required:true},
    photo:{type:String,required:true}

});
module.exports = mongoose.model('product', ProductSchema);