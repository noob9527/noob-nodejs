/**
 * Created by xy206 on 2016/1/6.
 */
var koa=require('koa'),
    logger=require('koa-logger'),
    staticCache = require('koa-static-cache'),
    session=require('koa-generic-session'),
    redisStore=require('koa-redis'),
    bodyParser = require('koa-bodyparser'),
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

    //bodyParser
    this.use(bodyParser());

    //TODO:loadMiddleWare
    initRoutes.call(this);

    initDb.call(this);

    this.listen(this.opts.port || 3000);
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
    global.Database = require('./model_loader.js');//这里应该可优化
}


function initRoutes() {
    var ctrls = require('./ctrl_loader.js');
    var router = koa_router();
    routes.forEach(function(route){
        var action=ctrls[route.ctrl][route.action];
        router[route.method](route.url,action);
    });
    this.use(router.middleware());
}

function initDb(){
    mongoose.connect(this.opts.mongodb.url,this.opts.mongodb.config);
}