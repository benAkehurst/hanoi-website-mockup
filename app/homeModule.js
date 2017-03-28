(function(){

	"use strict";

	var homeModule = angular.module("homeModule", []);

	homeModule.controller("HomepageController", function($scope, $http){

		$scope.openHours = "Every Day - 12:00 - 16:30, 18:00 - 00:00";
		$scope.phoneNumber = "03-533-7962";

		$scope.checkLocalTime = checkTime();



	});

	function checkTime(){
		
			var d = new Date();
			var h = d.getHours();
	    	var m = d.getMinutes();
	    	var s = d.getSeconds();
	    	m = checkMinutes(m);

	    	var time = h + ":" + m;

	    	if (time > "12:00" || time < "16:30"){
	    		return "OPEN NOW";
	    	}
	    	
	    	else if (time > "18:00" || time < "00:00"){
	    		return "OPEN NOW";
	    	}
			
	}

		function checkMinutes(i) {
		    if (i < 10) {
		        i = "0" + i;
		    }
		    return i;
		}

})();