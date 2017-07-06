/*global angular: false, module: false, controller: false, jstestdriver: false, beforeEach: false, afterEach: false, inject: false, spyOn: false, describe: false, beforeEach: false, inject: false, it: false, expect: false, module: false, : false */
/*jslint newcap: true, white: true, sloppy: true, vars: true, unparam: true */

angular.module('myApp',[])
      .controller('MainCtrl', [function() {
              var self = this;
              self.i8nMessages = {
                  quoteBoxMsg: '...Oh Yes!',
                  promoBenefits: [
                      {reason: 'We believe in being there for you.'},
                      {reason: 'It\'s important that we live this through our policies.'},
                      {reason: 'We believe that every interaction matters.'},
                      {reason: 'We spend time making sure you\'re happy. Oh Yes!'}
                  ]
              };
          }]
    );
