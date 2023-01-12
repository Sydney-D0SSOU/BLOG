const product = require('../models/product');


exports.createproduct = ((req,res,next)=>{
    const X = new product({
        nom : req.body.nom,
        categorie : req.body.categorie,
        prix:req.body.prix,
        photo:req.body.photo
    });
    X.save()
    .then(() => {
        res.status(201).json({
            message: 'Objet créé !'
          });

        })
     .catch((error) => { 
        res.status(400).json({error: error  });
        }
      );
    
});
exports.getallproduct = ((req,res,next)=>{
  
    product.find()
    .then((product)=>{
  res.status(200).json(product);})
  .catch((error)=>{
    console.log(error);
  })
  
           
        
    });
    exports.deleteproduct=(req,res,next)=>{
      product.deleteOne({_id:req.params.id })
      .then(()=>{
        res.status(200).json({message:'Produit supprimer'});
      })
      .catch((error)=>{
        console.log(error);
      })
    };
    exports.getoneproduct =(req,res,next)=>{
      product.findById({_id:req.params.id})
      .then((product)=>{
        res.status(200).json(product)
      })
      .catch((error)=>{
        console.log(error);
      })
    };
exports.modify=(req,res)=>{
  const X = new product({
    _id:req.params.id,
    nom : req.body.nom,
    categorie : req.body.categorie,
    prix:req.body.prix,
    photo:req.body.photo
});
product.updateOne({_id:req.params.id},X)
.then(()=>{
  res.status(201).json({message:'Produit modifier'})
})
.catch((error)=>{
  console.log(error);
})
};