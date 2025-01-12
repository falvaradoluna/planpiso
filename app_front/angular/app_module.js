var appModule = angular.module("planPisoApp", ["ngRoute"]);
appModule.config(function($routeProvider, $locationProvider) {
    

    $routeProvider.when('/', {
        templateUrl: 'angular/pages/empresa/empresa.html',
        controller: 'empresaController'
    }).when('/empresa', {
        templateUrl: 'angular/pages/empresa/empresa.html',
        controller: 'empresaController'
    }).when('/unuevas', {
        templateUrl: 'angular/pages/unuevas/unuevas.html',
        controller: 'unuevasController'
    }).when('/esquema', {
        templateUrl: 'angular/pages/esquema/esquema.html',
        controller: 'esquemaController'
    }).when('/interes', {
        templateUrl: 'angular/pages/interes/interes.html',
        controller: 'interesController'
    }).when('/pagoInteres', {
        templateUrl: 'angular/pages/pagoInteres/pagoInteres.html',
        controller: 'pagoInteresController'
    }).when('/dashboard', {
        templateUrl: 'angular/pages/dashboard/dashboard.html',
        controller: 'dashboardController'
    }).when('/tiie', {
        templateUrl: 'angular/pages/tiie/tiie.html',
        controller: 'tiieController'
    }).when('/conciliacion', {
        templateUrl: 'angular/pages/conciliacion/conciliacion.html',
        controller: 'conciliacionController'
    });

    $routeProvider.otherwise({ requireBasedirectTo: '/' });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});
