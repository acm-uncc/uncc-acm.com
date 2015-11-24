var angular = require('angular');
var router = require('angular-ui-router');

var app = angular.module('app', [ router ]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  // remove the hash (#) from the url
  $locationProvider.html5Mode(true);

  // custom pages
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'pages/error.html'
    })

  var pages = [ 'calendar', 'projects', 'awards', 'members', 'contact' ];

  pages.forEach(function (page) {
    $stateProvider
      .state(page, {
        url: '/' + page,
        templateUrl: 'pages/' + page + '.html'
      });
    });

  // maintain URL when defaulting to not found page
  $urlRouterProvider.otherwise(function ($injector) {
    $injector.get('$state').go('404', null, { location: false });
  });
});

// render ui-view inside of an ng-include
app.run(function ($state) {});
