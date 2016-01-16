/**
 * Created by xy206 on 2015/12/28.
 */

var Server=require('./server');
var config = require('./config')(__dirname);

var app=new Server(config);

app.start();

module.exports=app;