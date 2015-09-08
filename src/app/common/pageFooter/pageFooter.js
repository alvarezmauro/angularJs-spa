var pageFooterModule = angular.module('ngSpa.common.pageFooter', []);

pageFooterModule.directive('pageFooter', function ($timeout) {
  return {
    restrict: 'E',
    replace: true,
    scope: false,
    templateUrl: "common/pageFooter/pageFooter.tpl.html",
    controller: function ($scope, $element, $attrs) {

    },
    link: function ($scope, $elem, $attrs) {

    }
  };
});