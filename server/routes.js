/**
 * Created by xy206 on 2015/12/29.
 */

module.exports=[{
    method:'get',
    url:'/',
    ctrl:'index',
    action:'index'
},{
    method:'get',
    url:'/signup',
    ctrl:'sign',
    action:'showSignup'
},{
    method:'post',
    url:'/signup',
    ctrl:'sign',
    action:'signup'
},{
    method:'get',
    url:'/signin',
    ctrl:'sign',
    action:'showSignin'
},{
    method:'post',
    url:'/signin',
    ctrl:'sign',
    action:'signin'
}];

//module.exports=router;
//
//router.get('/',function*(next){
//    this.body='index';
//});


//var express = require('express');
//var controller=require('./controllers');
//var router = express.Router();
//
//module.exports = router;
//
//// index
//router.get('/',controller.index);
//
//// sign controller
//router.get('/signup', controller.sign.showSignup);
//router.post('/signup', controller.sign.signup);
//
//router.get('/signin', controller.sign.showSignin);
//router.post('/signin',controller.sign.signin);