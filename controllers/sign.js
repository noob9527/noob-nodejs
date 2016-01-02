/**
 * Created by xy206 on 2015/12/31.
 */

var User=require('../models').User;

exports.showSignup=function (req, res) {
    res.render('sign/signup');
}

exports.signup=function (req, res) {
    var user=new User(req.body.user);
    //save user
    user.save(function (err, user) {
        if (err) {
            //req.flash('error', err); //=>about session
            return res.redirect('/signup');//注册失败返回主册页
        }
        req.session.user = user;
        //req.flash('success', '注册成功!');
        res.redirect('/');//注册成功后返回主页
    });
}

exports.showSignin=function (req, res) {
    res.render('sign/signin');
}

exports.signin= function (req,res) {
    User.findOne({username:req.body.user.username},function(err,user){
        if(err){
            return res.redirect('/signin')  //登陆失败
        }
        if(!user||!user.password){
            return res.redirect('/signin')  //找不到用户
        }
        if(req.body.user.password!=user.password){
            return res.redirect('/signin')  //密码错误
        }
        req.session.user=user;
        res.redirect('/');
    })
}