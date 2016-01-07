/**
 * Created by xy206 on 2015/12/31.
 */
var views=require('co-views');

var render=views(Conf.view,{
    map:{html:'ejs'}
});

exports.index=function*(next){
    this.body=yield render('index',{title:'主页'});
};


//exports.index=function (req, res) {
//    res.render('index', { title: '主页'})
//}
//
//exports.sign=require('./sign');
