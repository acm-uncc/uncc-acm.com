var angular = require('angular');
var router = require('angular-ui-router');

var app = angular.module('app', [ router ]);


app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  // remove the hash (#) from the url
  $locationProvider.html5Mode(true);

  /*
    New pages must be registered here.

    A url and template to display at that url must be provided.

    An angular controller can also be provided in order to interact with the
    template using JavaScript.

    This is from the ui-router:
    http://bit.ly/1N01wM5
  */
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/pages/home.html'
    })
    .state('calendar', {
      url: '/calendar',
      templateUrl: '/partials/pages/calendar.html'
    })
    .state('not_found', {
      url: '/not_found',
      templateUrl: '/partials/pages/error.html'
    })

  // maintain URL when defaulting to not found page
  $urlRouterProvider.otherwise(function ($injector) {
    $injector.get('$state').go('not_found', null, { location: false });
  });
});

// render ui-view inside of an ng-include
app.run(function ($state) {});
