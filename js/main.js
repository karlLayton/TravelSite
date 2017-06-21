/**
 * Main AngularJS Web Application
 */
<<<<<<< HEAD
var app = angular.module('mainApp', ['ngAnimate', 'ui-router']);
=======
var app = angular.module('mainApp', []);
>>>>>>> 0e759351e735803ab420f38d98c7e45d277837b7
app.controller('pageCtrl', function($scope, $http) {
    $http.get("templates/header.html").then(function (response) {
        $scope.names = response.data.records;
    });
<<<<<<< HEAD
    $http.get("partials/home.html").then(function (response) {
        $scope.names = response.data.records;
    });
    $http.get("templates/footer.html").then(function (response) {
        $scope.names = response.data.records;
    });
=======
>>>>>>> 0e759351e735803ab420f38d98c7e45d277837b7
});