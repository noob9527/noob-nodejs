/**
 * Created by xy206 on 2016/1/2.
 */
var app=require('../app');
var request=require('supertest')(app);
var should=require('should');

describe('GET /',function(){
    it('should status 200',function(done){
        request.get('/')
            .expect(200,done);
    })
})