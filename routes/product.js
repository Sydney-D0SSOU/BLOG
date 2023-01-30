const express = require('express')
const router = express.Router();
const auth = require('../middlewares/auth');

const productCtrl = require('../controllers/product');


router.get('/all',auth,productCtrl.getallproduct);
router.get('/one/:id',auth,productCtrl.getoneproduct);
router.put('/modify/:id',auth,productCtrl.modify)
router.post('/create',auth,productCtrl.createproduct);
router.delete('/delete/:id',auth,productCtrl.deleteproduct);

module.exports=router;

