/**
 * Main AngularJS Web Application
 */
var app = angular.module('mainApp', []);
app.controller('pageCtrl', function($scope, $http) {
    $http.get("templates/header.html").then(function (response) {
        $scope.names = response.data.records;
    });
});