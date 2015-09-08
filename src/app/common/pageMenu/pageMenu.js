var pageMenuModule = angular.module('ngSpa.common.pageMenu', []);

pageMenuModule.directive('pageMenu', function ($timeout) {
  return {
    restrict: 'E',
    replace: true,
    scope: false,
    templateUrl: "common/pageMenu/pageMenu.tpl.html",
    controller: function ($scope, $element, $attrs) {

    },
    link: function ($scope, $elem, $attrs) {

    }
  };
});