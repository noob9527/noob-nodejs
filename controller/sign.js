/**
 * Created by xy206 on 2015/12/31.
 */
var views = require('co-views');

var render=views(Conf.view,{
    map:{html:'ejs'}
});

exports.showSignup=function* (next) {
    this.body=yield render('sign/signup');
};

exports.signup=function*(next){
};

exports.showSignin=function*(next){
    this.body=yield render('sign/signin');
};

exports.signin=function*(next){

};