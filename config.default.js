/**
 * Created by xy206 on 2015/12/30.
 */
var path = require('path');

module.exports = function(root){
    return{
        //mongodb
        mongodb:{
            url:'mongodb://127.0.0.1/noob',
            config:{
                server: {
                    poolSize: 12,
                    socketOptions: {
                        keepAlive: 1
                    }
                }
            }
        },
        //dir
        root: root,
        model: path.join(root, 'model'),
        view: path.join(root, 'view'),
        controller: path.join(root, 'controller'),

        secret: 'noobjs',

        port:3000
    }
};