/**
 * Created by xy206 on 2015/12/28.
 */

var express = require('express');
require('./models');    //at present for mongodb
var webRouter=require('./web_router');
var bodyParser = require('body-parser');

var app = express();

// 通用的中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//static resource
app.use(express.static('public'));    //app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', './views');    //app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html',require('ejs').__express);

//socket listen
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

//router middleware
app.use('/', webRouter);