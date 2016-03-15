angular.module('myApp', [])
	.controller('inputCtrl', ['$scope', function($scope){

	}])
	.config(['', function(){


}]);

//  ROUTING CODE FROM LECTURE WITH TWEET.HTML ADDED
// var app = angular.module(‘myApp’, [’ngRoute’]);
// app.config([‘$routeProvider’, function($routeProvider) {
// $routeProvider
// .when(‘/’, {
// templateUrl: ‘views/welcome.html’,
// controller: ‘WelcomeController’ **PUT THE CORRECT CONTROLLER NAME HERE
// })
// .when(‘/tweets’, {
// templateUrl: ‘views/tweets.html’,
// controller: ‘AuctionsController’ **PUT THE CORRECT CONTROLLER NAME HERE
// })
// .otherwise({
// redirectTo: ‘/’
// });