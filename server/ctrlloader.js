/**
 * 加载所有Controller
 * example: ctrls={
 *     user:require(path.join(Conf.controller, user.js)),
 *     api:require(path.join(Conf.controller, api.js))
 * }
 * @type {exports|module.exports}
 */

var fs=require('fs');
var path=require('path');
var ctrls = {};

fs.readdirSync(Conf.controller).forEach(function(file) {
    if (file.indexOf('.js') != -1) {
        var ctrlName = file.split('.')[0];
        ctrls[ctrlName] = require(path.join(Conf.controller, file));
    }
});

exports = module.exports = ctrls;
