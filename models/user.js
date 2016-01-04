/**
 * Created by xy206 on 2015/12/30.
 */
var validator = require('validator');
var mongoose  = require('mongoose');

//type
var UserSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,validate:validator.isEmail}
},{timestamps:true});

//schema option
//UserSchema.set('timestamps',true); //-> it's a bug!!

//index
UserSchema.index({username:1},{unique:true});
UserSchema.index({email:1},{unique:true});

//virtual
UserSchema.virtual('repassword').set(function(repassword){
    //if(repassword!==this.password){
    //    throw new Error('两次输入的密码不一致');

        //this.on('save',function(callback){
        //    callback(new Error('两次输入的密码不一致'));
        //})
    //}
});

//middleware(parallel)
//UserSchema.pre('save',true,function(next,done){
//    console.log(this.repassword);
//    next();
//    done();
//});

//plugin
//statics and methods

//compile schema
mongoose.model('User',UserSchema);

