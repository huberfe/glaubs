(function () {
  'use strict';

  angular
    .module('glaubs.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/municipalities', {
      controller: 'MunicipalitiesController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/municipalities/municipalities.html'
    }).when('/municipalities/:id', {
      controller: 'MunicipalitiesEditController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/municipalities/municipalities_editor.html'
    }).when('/municipalities/:id/reminder', {
      controller: 'MunicipalitiesReminderController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/municipalities/municipalities_reminder.html'
    }).when('/municipalities/:municipality_id/mailings/:mailing_id', {
      controller: 'MailingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/mailings/mailings_editor.html'
    }).when('/returns', {
      controller: 'ReturnsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/returns/returns.html'
    }).when('/reminders', {
      controller: 'RemindersController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/reminders/reminders.html'
    }).when('/reminders_by_municipality', {
      controller: 'RemindersByMunicipalityController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/reminders/reminders_by_municipality.html'
    }).otherwise('/municipalities');
  }
})();
