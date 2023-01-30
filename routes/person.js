const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth');
const personCtrl = require ('../controllers/person');


router.post('/signup',auth,personCtrl.signup);
router.post('/login',auth,personCtrl.login);
module.exports = router ;