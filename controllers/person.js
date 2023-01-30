const person = require('../models/person');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup =(req,res,next)=>{
    bcrypt.hash(req.body.password,10)
    .then(hash=>{
        const induvidual = new person({
    nom:req.body.nom,
    prenom :req.body.prenom,
    sexe:req.body.se,
    filiere :req.body.filiere,
    ville :req.body.ville,
    email :req.body.email,
    password:hash
        });
    
        induvidual.save()
        .then(()=>{
            res.status(200).json({message:'COMPTE CREER AVEC SUCCES'})
        })
            .catch((error)=>{
console.log(error);
});
})  

    .catch((error)=>{
    res.status(500).json({error})
})
} ;
exports.login= (req,res,next)=>{
    person.findOne({email:req.body.email})
.then(person=>{
    if(!person){
     return res.status(401).json({error:'Utilisateur non trouver'})}

    bcrypt.compare(req.body.password,person.password)
    .then(valid=>{
        if(!valid){
            return res.status(401).json({error:'mot de passe incorrect'})
        }
        res.status(200).json({
            userId:person._id,
            token:jwt.sign(
                {userId:person._id},
                'RANDOM',
                /*{expireIn:'24h'}*/
            )
        });
    })
    .catch(error=>{
        res.status(500).json({error})
    });

})
 .catch(error=>{
        res.status(500).json({error})
    });
};