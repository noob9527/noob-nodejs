/**
 * Created by xy206 on 2016/1/2.
 */
var app = require('../../app');
var should = require('should');
var config=require('../../config');
var request = require('supertest')(require('http').createServer(app.callback()));

//TODO:init mongodb
//TODO:init redis

describe('test/controllers/sign.test.js',function(){
    before(function() {
        var User=Database.models.user;
        User.remove({},function(err){
            if(err){
                console.log('fail to remove users collection');
            }
        })
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
    var username='testUser';
    var email='test@qq.com';
    var password='testPassword';

    describe('showSignup',function(){
        it('should show sign up view to visitor',function(){
        })
    });
    describe('signup',function(){
        it('should sign up a user',function(){
        });
        it('should reject because of unique index',function(){
        });
        it('should reject because of repassword',function(){
        });
        it('should reject because of validatorErr',function(){
        });
    });
    describe('showSignin',function(){
        it('should show sign in view to visitor',function(){
        })
    });
    describe('signin',function(){
        it('should sign in success',function(){
        })
    })

});