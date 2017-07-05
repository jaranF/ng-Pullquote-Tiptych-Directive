/*global angular: false, module: false, controller: false, jstestdriver: false, beforeEach: false, afterEach: false, inject: false, spyOn: false, describe: false, beforeEach: false, inject: false, it: false, expect: false, module: false, : false */
/*jslint newcap: true, white: true, sloppy: true, vars: true, unparam: true */

angular.module('myApp')
       .directive('promoTriptych', [function() {
           return {
               templateUrl: 'build/directives/promo-triptych.html',
               restrict: 'A',
               scope: {
                   i8nData: "="
               }
           };
       }]);