/**
 * Created by xy on 16-1-16.
 */
var BackStageApp=angular.module('BackStageApp',[
    'ngRoute',
    'main',
    'sign'
]);

BackStageApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
            .when('/',{
                controller: 'MainCtrl',
                templateUrl: 'partials/main.html'
            })
            .when('/sign_up', {
                controller: 'SignUpCtrl',
                templateUrl: 'partials/sign_up.html'
                //hideMenus: true
            })
            .when('/sign_in', {
                controller: 'SignInCtrl',
                templateUrl: 'partials/sign_in.html'
                //hideMenus: true
            })
    }]);
