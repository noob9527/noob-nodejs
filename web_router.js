/**
 * Created by xy206 on 2015/12/29.
 */
var express = require('express');
var router = express.Router();

module.exports = router;

// home page
router.get('/', function (req, res) {
    res.render('index', { title: '主页',authenticated:false });
});

// sign controller

router.get('/signup', function (req, res) {
    res.render('sign/signup', { title: '注册' });
});

//test mongodb
var User=require('./models/user')
router.post('/signup', function (req, res) {
    var user=new User({
        name:req.body.username,
        password:req.body.password,
        email:req.body.email
    })
    //save user
    user.save(function (err, user) {
        if (err) {
            //req.flash('error', err); //=>about session
            return res.redirect('/signuo');//注册失败返回主册页
        }
        //req.session.user = user;//TODO:用户信息存入 session
        //req.flash('success', '注册成功!');
        res.redirect('/');//注册成功后返回主页
    });
});
//end test

router.get('/signin', function (req, res) {
    res.render('sign/signin', { title: '登录' });
});
router.post('/signin', function (req, res) {
});

//router.get('/logout', function (req, res) {
//});
//
//router.get('/post', function (req, res) {
//    res.render('post', { title: '发表' });
//});
//router.post('/post', function (req, res) {
//});


