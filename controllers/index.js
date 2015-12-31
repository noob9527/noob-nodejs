/**
 * Created by xy206 on 2015/12/31.
 */

exports.index=function (req, res) {
    res.render('index', { title: '主页'})
}

exports.sign=require('./sign');
