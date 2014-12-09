// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }   
  });
});

//-- tweets controller--//
    function tweetsCtrl($scope){
    	$scope.tweets = [
    	{
    		user: "blankalready",
    		tweet: "fly me to the moon"
    	},
    	{
			user: "blankalready",
    		tweet: "and let me fly"
    	},
    	{
			user: "blankalready",
    		tweet: "among the stars"
    	}
    	];

    	$scope.addRed = "";
    	$scope.changeMe = function(){
    		if ($scope.addRed == "red") {
    			$scope.addRed = "blue";
    		}
    		else{
    			$scope.addRed = "red";
    		}
    	};
    };
//--end of tweets controller--//

//--custom directive--//
	starter.directive('twList', function(){
		return{
			restrict: 'E',
			template: '<ul class="list"><li class="item {{addRed}}" ng-repeat="tweet in tweets" ng-click="changeMe()">Username: {{tweet.user}} <br> Tweet: {{tweet.tweet}}</li></ul>'
		};
	});
//--end of custom directive--//