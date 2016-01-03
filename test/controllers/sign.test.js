/**
 * Created by xy206 on 2016/1/2.
 */
var app = require('../../app');
var request = require('supertest')(app);
var should = require('should');
var User=require('../../models').User;
var config=require('../../config');

//TODO:init mongodb
//TODO:init redis

describe('test/controllers/sign.test.js',function(){
    before(function() {
        // runs before all tests in this block
    });
    after(function() {
        // runs after all tests in this block
    });
    beforeEach(function() {
        // runs before each test in this block
    });
    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
    var now=new Date();
    var username='testUser'+now;
    var email='test@qq.com';
    var password='testPassword';

    describe('showSignup',function(){
        it('should show sign up view to visitor',function(done){
            request.get('/signup')
                .expect(200,done);
        })
    });
    describe('signup',function(){
        it('should sign up a user',function(done){
            request.post('/signup')
                .type('form')
                .send({
                    "user[username]":username,
                    "user[email]":email,
                    "user[password]":password,
                    "user[repassword]":password
                })
                .expect(302,function(err,res){
                    should.not.exists(err);
                    User.findOne({username:username},function(err,user){
                        should.not.exists(err);
                        user.should.ok();
                        done();
                    })
                });
        });
        it('should reject because of unique index',function(done){
            request.post('/signup')
                .type('form')
                .send({
                    "user[username]":username,
                    "user[email]":email,
                    "user[password]":password,
                    "user[repassword]":password
                })
                .expect(422,done);
        });
        it('should reject because of repassword',function(done){
            request.post('/signup')
                .type('form')
                .send({
                    "user[username]":username,
                    "user[email]":email,
                    "user[password]":password
                })
                .expect(422,done);
        });
        it('should reject because of validator',function(done){
            request.post('/signup')
                .type('form')
                .send({
                    "user[username]":username,
                    "user[email]":'',
                    "user[password]":password,
                    "user[repassword]":password
                })
                .expect(422,done);
        });
    })
})