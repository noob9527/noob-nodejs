/**
 * Created by xy206 on 2015/12/31.
 */
var User=require('../models/user')

exports.showSignup=function (req, res) {
    res.render('sign/signup');
}

exports.signup=function (req, res) {
    var user=new User({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    })
    //save user
    user.save(function (err, user) {
        if (err) {
            //req.flash('error', err); //=>about session
            return res.redirect('/signuo');//注册失败返回主册页
        }
        req.session.user = user;
        //req.flash('success', '注册成功!');
        res.redirect('/');//注册成功后返回主页
    });
}

exports.showSignin=function (req, res) {
    res.render('sign/signin');
}