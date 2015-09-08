angular.module('ngSpa.home', [
  'ngRoute',
  'plusOne'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.tpl.html',
      controller: 'home'
    });
  }])
/**
 * And of course we define a controller for our route.
 */
  .controller('home', function HomeController($scope) {
    $scope.pageClass = 'page-home';
  })

;

