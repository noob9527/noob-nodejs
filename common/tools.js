/**
 * Created by xy on 2016/1/4.
 */
var bcrypt = require('bcryptjs');

exports.bhash=function(str){
    return bcrypt.hashSync(str,10);
    //bcrypt.hash(str,10,function(err,result){
    //    if(err){
    //        throw new Error('bhash fail');//TODO:find a handler
    //    }
    //    console.log(result);
    //    test = result;
    //});

};

exports.bcompare = function (str, hash, callback) {
    bcrypt.compare(str, hash, callback);
};