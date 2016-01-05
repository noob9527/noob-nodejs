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
            getUser(user.loginInfo,function(err,userModel){
                if(err)
                    return callback(err);
                if(!userModel)
                    return callback(new Error('找不到"'+user.loginInfo+'"对应的用户！'))
                callback(null,userModel);
            });
        },
        function (userModel,callback) {
            userModel.auth(user,function(err,bool){
                if(err)
                    return callback(err);
                if(!bool)
                    return callback(new Error('密码错误!'));
                callback(null,userModel);
            });
        }
    ],callback);

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
    User.findOne({'username': username}, callback);
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
    User.findOne({email: email}, callback);
};