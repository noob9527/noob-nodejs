/**
 * Created by xy206 on 2015/12/30.
 */
var validator = require('validator');
var mongoose  = require('mongoose');

var Schema=mongoose.Schema;
var UserSchema=new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,validate:validator.isEmail}
});

UserSchema.index({username:1},{unique:true});
UserSchema.index({email:1},{unique:true});

mongoose.model('User',UserSchema);

