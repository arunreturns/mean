angular.module('appRoutes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');
    $stateProvider
        .state('Home', {
            url: '/Home',
            templateUrl: 'views/HomePage.html',
            controller: 'MainCtrl',
    	}).state('Ingredients', {
            url: '/Ingredients',
            templateUrl: 'views/ViewIngredients.html',
            controller: 'IngredientCtrl',
    	});
});