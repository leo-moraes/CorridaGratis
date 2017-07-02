angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.corridaGrTisUberCabify99', {
    url: '/corridaGratis',
    views: {
      'tab2': {
        templateUrl: 'templates/corridaGrTisUberCabify99.html',
        controller: 'corridaGrTisUberCabify99Ctrl'
      }
    }
  })

  .state('tabsController.corridaGrTisUberCabify992', {
    url: '/comoUsar',
    views: {
      'tab3': {
        templateUrl: 'templates/corridaGrTisUberCabify992.html',
        controller: 'corridaGrTisUberCabify992Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/corridaGratis')


});