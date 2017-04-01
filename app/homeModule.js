(function(){

	"use strict";

	var homeModule = angular.module("homeModule", []);

	homeModule.controller("HomepageController", function($scope, $http){

		// Gives the scope access to the opening times and phone number
		$scope.openHours = "Every Day - 12:00 - 16:30, 18:00 - 00:00";
		$scope.phoneNumber = "03-533-7962";

		// Runs the function to check the time and allows for display
		$scope.checkLocalTime = checkTime();

		// TODO: CHANGE THE IDS IN THE HTML
		// Initiates the ablilty for clicking the arrow to allow auto scroll
		$("#moveup").click(function(){
		  $("html, body").stop().animate({
		    scrollTop: $('#tabs').offset().top - 40
		  }, '500', 'linear');
		});

	});

	function checkTime(){
		
			var d = new Date();
			var h = d.getHours();
	    	var m = d.getMinutes();
	    	m = checkMinutes(m);

	    	var time = h + ":" + m;

	    	if (time >= "12:00" || time <= "16:30" || time >= "18:00" || time <= "00:00"){
	    		return "OPEN NOW";
	    	}
	    	else {
	    		return "CLOSED NOW";
	    	}
	}

	function checkMinutes(i) {
		    if (i < 10) {
		        i = "0" + i;
		    }
		    return i;
	}

})();