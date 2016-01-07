/**
 * Created by xy206 on 2015/12/30.
 */
var validator = require('validator');
var mongoose  = require('mongoose');
var tools=require('../common/tools');//TODO

//type
//TODO:CustomValidator
var UserSchema=new mongoose.Schema({
    username:{type:String,
        required:true,
        maxlength:12},
    password:{type:String,
        required:true,
        set:tools.bhash},
    email:{type:String,
        lowercase:true,
        validate:validator.isEmail}
},{timestamps:true});

//schema option
//UserSchema.set('timestamps',true); //-> it's a bug!!

//index
UserSchema.index({username:1},{unique:true});
UserSchema.index({email:1},{unique:true});

//virtual
//UserSchema.virtual('repassword').set(function(repassword){
//
//});

//middleware(parallel)
//UserSchema.pre('save',true,function(next,done){
//    next();
//    done();
//});
//plugin

//statics and methods
UserSchema.methods.auth=function(user, callback){
    tools.bcompare(user.password,this.password,callback);
};

//compile schema
mongoose.model('User',UserSchema);

