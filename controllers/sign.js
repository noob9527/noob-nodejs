/**
 * Created by xy206 on 2015/12/31.
 */

var User=require('../models').User;
var UserProxy=require('../proxy/user');

//TODO:Async and Proxy

exports.showSignup=function (req, res) {
    res.render('sign/signup');
};

exports.signup=function (req, res) {
    if(req.body.user.password!==req.body.user.repassword){
        res.status(422);
        return res.render('sign/signup',{
            err:"两次输入的密码不一致"
        });
    }

    var user=new User(req.body.user);

    //save user
    user.save(function (err, user) {
        if (err) {
            res.status(422);
            return res.render('sign/signup',{
                err:err.toString()
            });//mongooseErr
        }
        req.session.user = user;
        res.redirect('/');//注册成功后返回主页
    });
};

exports.showSignin=function (req, res) {
    res.render('sign/signin');
};

exports.signin= function (req,res) {
    UserProxy.getUserByLoginInfo(req.body.user,function(err,user){
        if(err){
            res.status(422);
            return res.render('sign/signin',{err:err.message});
        }
        req.session.user=user;
        res.redirect('/');
    });
};