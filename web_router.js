/**
 * Created by xy206 on 2015/12/29.
 */
var express = require('express');
var controller=require('./controllers');
var router = express.Router();

module.exports = router;

// index
router.get('/',controller.index);

// sign controller
router.get('/signup', controller.sign.showSignup);
router.post('/signup', controller.sign.signup);

router.get('/signin', controller.sign.showSignin);
