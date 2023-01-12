const express = require('express')
const router = express.Router();
const productCtrl = require('../controllers/product');

router.get('/all',productCtrl.getallproduct);
router.get('/one/:id',productCtrl.getoneproduct);
router.put('/modify/:id',productCtrl.modify)
router.post('/create',productCtrl.createproduct);
router.delete('/delete/:id',productCtrl.deleteproduct);

module.exports=router;

