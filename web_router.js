/**
 * Created by xy206 on 2015/12/29.
 */
var express = require('express');
var router = express.Router();

module.exports = router;

// home page
router.get('/', function (req, res) {
    res.render('index', { title: '主页' });
});

// sign controller
/*router.get('/reg', function (req, res) {
    res.render('reg', { title: '注册' });
});
router.post('/reg', function (req, res) {
});

router.get('/login', function (req, res) {
    res.render('login', { title: '登录' });
});
router.post('/login', function (req, res) {
});

router.get('/logout', function (req, res) {
});

router.get('/post', function (req, res) {
    res.render('post', { title: '发表' });
});
router.post('/post', function (req, res) {
});*/


