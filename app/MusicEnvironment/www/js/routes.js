angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('funciones.salaDeClasicos', {
    url: '/clasicos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salaDeClasicos.html',
        controller: 'salaDeClasicosCtrl'
      }
    }
  })

  .state('funciones.salaBailables', {
    url: '/bailables',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salaBailables.html',
        controller: 'salaBailablesCtrl'
      }
    }
  })

  .state('funciones.salaElectronica', {
    url: '/electro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salaElectronica.html',
        controller: 'salaElectronicaCtrl'
      }
    }
  })

  .state('funciones', {
    url: '/side_menu',
    templateUrl: 'templates/funciones.html',
    controller: 'funcionesCtrl'
  })

  .state('musicEnvironment', {
    url: '/login',
    templateUrl: 'templates/musicEnvironment.html',
    controller: 'musicEnvironmentCtrl'
  })

  .state('musicEnvironment2', {
    url: '/signup',
    templateUrl: 'templates/musicEnvironment2.html',
    controller: 'musicEnvironment2Ctrl'
  })

$urlRouterProvider.otherwise('/login')

  

});