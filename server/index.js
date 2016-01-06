/**
 * Created by xy206 on 2016/1/6.
 */
var koa=require('koa'),
    logger=require('koa-logger'),
    session=require('koa-generic-session'),
    redisStore=require('koa-redis');
    //router=require('koa-router'); TODO:routers


var Server=function(option){
    this.opts=option||{};
};

//extend koa
var server=Server.prototype=koa();

module.exports=Server;

server.start=function(){
    this.keys=[this.opts.secret]||"secret key string";
    this.use(session({
        store:redisStore()
    }));

    if(this.opts.log) this.use(logger());

    //test
    this.use(function* (){
        this.body='hello';
    });

    this.listen(this.opts.port || 3000);
};


