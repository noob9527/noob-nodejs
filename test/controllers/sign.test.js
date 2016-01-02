/**
 * Created by xy206 on 2016/1/2.
 */
var app = require('../../app');
var request = require('supertest')(app);
var should = require('should');
var User=require('../../models').User;

describe('test/controllers/sign.test.js',function(){
    var now=new Date();
    var username='testUser'+now;
    var email=username+'@qq.com';
    var password='testPassword';

    describe('showSignup',function(){
        it('should show sign up view to visitor',function(done){
            request.get('/signup')
                .expect(200,done);
        })
    })
    describe('signup',function(){
        it('should sign up a user',function(done){
            request.post('/signup')
                .type('form')
                .send({
                    "user[username]":username,
                    "user[email]":email,
                    "user[password]":password
                })
                .expect(302,function(err,res){
                    should.not.exists(err);
                    User.findOne({username:username},function(err,user){
                        should.not.exists(err);
                        user.should.ok();
                        done();
                    })
                });
        })
    })
})