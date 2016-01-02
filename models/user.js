/**
 * Created by xy206 on 2015/12/30.
 */

var mongoose  = require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
    username:String,
    password:String,
    email:String
});

UserSchema.index({username:1},{unique:true});
UserSchema.index({email:1},{unique:true});

mongoose.model('User',UserSchema);

