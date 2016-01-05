/**
 * Created by xy on 2016/1/5.
 */

var User=require('../models').User;
var validator = require('validator');
var async=require('async');

/**
 * 根据用户输入的登陆信息查找用户
 * @param user
 * @param callback
 */
exports.getUserByLoginInfo=function(user,callback){
    var getUser=validator.isEmail(user.loginInfo)?
        this.getUserByMail:
        this.getUserByUserName;

    async.waterfall([
        function(callback){
            getUser(user.loginInfo,callback);//TODO:can't get loginInfo like this!!
        },
        function (userModel,callback) {
            userModel.auth(user,callback);
        }
    ],callback)
};

/**
 * 根据用户名查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} username 登录名
 * @param {Function} callback 回调函数
 */
exports.getUserByUserName = function (username, callback) {
    User.findOne({'username': username}, callback);//TODO
};

/**
 * 根据邮箱，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} email 邮箱地址
 * @param {Function} callback 回调函数
 */
exports.getUserByMail = function (email, callback) {
    User.findOne({email: email}, callback);//TODO
};