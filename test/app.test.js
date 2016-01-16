/**
 * Created by xy206 on 2016/1/2.
 */
var app=require('../app');
var should=require('should');
var request = require('supertest')(require('http').createServer(app.callback()));

describe('GET /',function(){
    it('should status 200',function(done){
        request.get('/')
            .expect(200,done);
    })
});