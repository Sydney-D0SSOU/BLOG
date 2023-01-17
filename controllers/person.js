const person = require('../models/person')
const bcrypt = require ('bcrypt')
exports.signup =(req,res)=>{
    bcrypt.hash(req.body.email,5)
    .then(hash=>{
        const induvidual = new person({
    nom:req.body.nom,
    prenom :req.body.prenom,
    sexe:req.body.sexe,
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
    if(person===null){
    res.status(401).json({message:'PAIRE identifiant/mot de passe incorrecte'})}
else{
    bcrypt.compare(req.body.password,person.password)
    .then(valid=>{
        if(!valid){
            res.status(401).json({message:'Paire identifiant/mot de passe incorrect'})
        }
        else{res.status(201).json({
            userId:person._id,
            token:'TOKEN'
        })}
    })
    .catch(error=>{
        res.status(500).json({error})
    })
}
})
 .catch(error=>{
        res.status(500).json({error})
    })
};