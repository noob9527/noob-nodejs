/**
 * Created by xy on 16-1-11.
 */

var path = require('path');
var fs=require('fs');

var database={
    models:{}
};

module.exports=database;

fs.readdirSync(Conf.model).forEach(function(file){
   if(~file.indexOf('.js')){
       var modelName = file.split('.')[0];
       //TODO:测试mongoose 是否为 singleton
       database.models[modelName]=require(path.join(Conf.model, file));
       _log("load mongoose model --> " + modelName);
   }
});