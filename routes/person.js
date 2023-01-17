const express = require('express')
const router = express.Router()
const personCtrl = require ('../controllers/person')

router.post('/signup',personCtrl.signup);
router.post('/login',personCtrl.login);
module.exports = router ;