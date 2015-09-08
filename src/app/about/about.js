angular.module('ngSpa.about', [
  'ngRoute',
  'placeholders',
  'ui.bootstrap'
])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about', {
      controller: 'AboutCtrl',
      templateUrl: 'about/about.tpl.html'
    });
  }])

  .controller('AboutCtrl', function AboutCtrl($scope) {
    $scope.pageClass = 'page-about';
    // This is simple a demo for UI Boostrap.
    $scope.dropdownDemoItems = [
      "The first choice!",
      "And another choice for you.",
      "but wait! A third!"
    ];
  })
;
