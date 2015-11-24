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
    .state('calendar', {
      url: '/calendar',
      templateUrl: 'pages/template.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'pages/template.html'
    })
    .state('awards', {
      url: '/awards',
      templateUrl: 'pages/template.html'
    })
    .state('members', {
      url: '/members',
      templateUrl: 'pages/template.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'pages/template.html'
    })
    .state('not found', {
      templateUrl: 'pages/error.html'
    })


  // maintain URL when defaulting to not found page
  $urlRouterProvider.otherwise(function ($injector) {
    $injector.get('$state').go('not found', null, { location: false });
  });
});

// render ui-view inside of an ng-include
app.run(function ($state) {});
