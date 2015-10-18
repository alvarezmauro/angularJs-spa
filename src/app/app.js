(function (angular) {
  'use strict';
  angular.module('ngSpa', [
    'templates-app',
    'templates-common',
    'ngSpa.home',
    'ngSpa.about',
    'ngSpa.common.pageFooter',
    'ngSpa.common.pageMenu',
    'ngRoute',
    'ngAnimate'
  ])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.otherwise('/home');
    }])

    .run(['$rootScope', function ($rootScope) {

    }]);

})(window.angular);