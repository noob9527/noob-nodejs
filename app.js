/**
 * Created by xy206 on 2015/12/28.
 */

var express = require('express');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var webRouter=require('./web_router');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var middlewares=require('./middlewares');
var config=require('./config');
require('./models');    //at present for mongodb

var app = express();

//common middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.secret));

app.use(session({
    store:new redisStore({
        host:config.redis_host,
        port:config.redis_port
    }),
    secret:config.secret,
    saveUninitialized: false,       //服务端初始化session cookie,false节省服务端资源
    resave: true                    //是否每次请求重置session cookie
}));

//static resource
app.use(express.static('public'));    //app.use(express.static(path.join(__dirname, 'public')));

//custom middleware
app.use(middlewares.locals);

//router middleware
app.use('/', webRouter);

//view engine setup
app.set('views', './views');    //app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html',require('ejs').__express);

//socket listen
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

module.exports=app;