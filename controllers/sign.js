/**
 * Created by xy206 on 2015/12/31.
 */

var User=require('../models').User;
var UserProxy=require('../proxy/user');
var async=require('async');
//TODO:Async and Proxy

exports.showSignup=function (req, res) {
    res.render('sign/signup');
};

exports.signup=function (req, res) {
    //async.series([
    //    function(callback){
    //        if(req.body.user.password!==req.body.user.repassword)
    //            return callback(new Error('两次输入的密码不一致'));
    //        var user=new User(req.body.user);
    //        user.save(callback);
    //    }
    //],function(err,user){
    //    if(err){
    //        res.status(422);
    //        return res.render('sign/signup',{err:err});
    //    }
    //    req.session.user = user;
    //    res.redirect('/');//注册成功后返回主页
    //});

    var callback=function(err,user){
        if(err){
            res.status(422);
            return res.render('sign/signup',{err:err});
        }
        req.session.user = user;
        res.redirect('/');//注册成功后返回主页
    };

    if(req.body.user.password!==req.body.user.repassword)
        return callback(new Error('两次输入的密码不一致'));
    var user=new User(req.body.user);
    user.save(callback);

    //new Promise(function(resolve,reject){
    //
    //})
};

exports.showSignin=function (req, res) {
    res.render('sign/signin');
};

exports.signin= function (req,res) {
    UserProxy.getUserByLoginInfo(req.body.user,function(err,user){
        if(err){
            console.log(err);
            res.status(422);
            return res.render('sign/signin',{err:err.message});
        }
        req.session.user=user;
        res.redirect('/');
    });
};