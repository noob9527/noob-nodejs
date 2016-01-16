/**
 * Created by xy on 16-1-16.
 */
var MainModule=angular.module('main',[]);

MainModule.controller('MainCtrl',['$scope',
        function($scope){
            $scope.user={username:'xy'};
        }]);
