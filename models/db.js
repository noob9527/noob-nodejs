/**
 * Created by xy206 on 2015/12/30.
 */

var config=require('../config');
var mongodb=require('mongodb');

var server=new mongodb.Server(config.dbhost,config.dbport);
module.exports=new mongodb.Db(config.dbname,server,{safe:true});
