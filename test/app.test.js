/**
 * Created by xy206 on 2016/1/2.
 */
var app=require('../app');
var request=require('supertest');
var should=require('should');

describe('GET /',function(){
    it('status 200',function(done){
        request(app).get('/').end(function(err,res){
            res.status.should.equal(200);
            done();
        })
    })
})