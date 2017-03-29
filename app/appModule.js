(function(){

	"use strict";

	var appModule = angular.module("appModule", ["ngRoute",
												 "homeModule",
												 "aboutModule",
												 "menuModule",
												 "bookingModule"
												]);

	appModule.config(function($routeProvider){
		
		$routeProvider

		.when("/", {
			controller:"HomepageController",
			templateUrl:"app/homepageView.html"
		})

		.when("/about", {
			controller:"AboutController",
			templateUrl:"app/aboutView.html"
		})

		.when("/menu", {
			controller:"MenuController",
			templateUrl:"app/menuView.html"
		})

		.when("/booking", {
			controller:"BookingController",
			templateUrl:"app/bookingView.html"
		})

		.otherwise({
			redirectTo:"/"
		});	

	});

	// Make a directive that goes in a div and shows rights:
	// All Rights Reserved &copy; This year
	appModule.directive("ngPageRights", function(){
		var d = new Date();
		var year = d.getFullYear();
		return {
			template:'<p>All Rights Reserved &copy; ' + year +'</p>'
		};
	});


})();