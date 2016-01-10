/**
 * Created by xy206 on 2015/12/30.
 */

var mongoose=require('mongoose');

require('./user');

exports.User=mongoose.model('User');

//var mongoose=require('mongoose');
//var config=require('../config');
//
//mongoose.connect(config.mongodb_url,function(err){
//    if(err){
//        console.log('无法连接到mongodb');
//        process.exit(1);
//    }
//});
//
////models
//require('./user');
//
//exports.User=mongoose.model('User');