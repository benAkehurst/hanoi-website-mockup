(function(){

	"use strict";

	var aboutModule = angular.module("aboutModule", []);

	aboutModule.controller("AboutController", function($scope, $http){

		// https://developers.google.com/places/web-service/details
		// AIzaSyBKs2JPf2BmSP9RkZyBlvGtwWU1UjV5IGI - Google Details API Key 
		// https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ096sZJxMHRUROKs1iZd1Xps&key=AIzaSyBKs2JPf2BmSP9RkZyBlvGtwWU1UjV5IGI

		$http({
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ096sZJxMHRUROKs1iZd1Xps&key=AIzaSyBKs2JPf2BmSP9RkZyBlvGtwWU1UjV5IGI'})
			
			.then(function successCallback(response) {
		    	// Testing Response to find correct element
		    	// var reviews = response.data.result;
		    	// var reviewerName = response.data.result.reviews[0].author_name;
		    	// var reviewerText = response.data.result.reviews[0].text;
		    	// var reviewerText = response.data.result.reviews[0].text;
		    	// console.log(reviews);
		    	// console.log(reviewerName);
		    	// console.log(reviewerText);

		    	$scope.reviews = response.data.result.reviews;
		  	});


	});

})();