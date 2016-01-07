/**
 * Created by xy206 on 2016/1/6.
 */
var koa=require('koa'),
    logger=require('koa-logger'),
    staticCache = require('koa-static-cache'),
    session=require('koa-generic-session'),
    redisStore=require('koa-redis'),
    koa_router=require('koa-router');
var log=require('util').log;
var routes=require('./routes');
var path=require('path');
var mongoose=require('mongoose');


var Server=function(option){
    this.opts=option||{};
};

//extend koa
var server=Server.prototype=koa();

module.exports=Server;

/**
 * 启动服务
 */
server.start=function(){
    //TODO:initCache
    initGlobal.call(this);

    this.keys=[this.opts.secret]||"secret key string";
    //logger
    if(this.opts.log) this.use(logger());

    //session
    this.use(session({
        store:redisStore()
    }));

    //static
    this.use(staticCache(path.join(this.opts.root, 'public'), {
        maxAge: 365 * 24 * 60 * 60
    }));

    //TODO:loadMiddleWare
    initRoutes.call(this);

    connectDb.call(this);

    this.listen(this.opts.port || 3000);
    //debug("Server listening on " + port);
};

/**
 * 处理异常
 * @param callback
 */
server.errHandle=function(callback){
    process.on('uncaughtException', callback);
};

function initGlobal(){
    global.Conf = this.opts;
    global._log = log;
    //global.Database = require('./modelloader.js');
    //debug("initlizing global");
}


function initRoutes() {
    var ctrls = require('./ctrlloader.js');
    var router = koa_router();
    routes.forEach(function(route){
        var action=ctrls[route.ctrl][route.action];
        router[route.method](route.url,action);
    });
    this.use(router.middleware());
}

function connectDb(){
    mongoose.connect(this.opts.mongodb.url,this.opts.mongodb.config);

    mongoose.connection.on('connected', function() {
        console.log('mongoose connected');
    });
    mongoose.connection.on('error', function(err) {
        console.log('mongoose default connection error: ' + err);
    });
    mongoose.connection.on('disconnected', function() {
        console.log('mongoose default connection disconnected');
    });
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
    
}