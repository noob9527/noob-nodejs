/**
 * Created by xy on 16-1-16.
 */
var SignModule=angular.module('sign',[]);

SignModule.controller('SignUpCtrl',['$scope',
    function($scope){
        $scope.user={username:'xy'};
    }]);

SignModule.controller('SignInCtrl',['$scope',
    function($scope){
        $scope.user={username:'xy'};
    }]);