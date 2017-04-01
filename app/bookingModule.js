(function(){

	"use strict";

	var bookingModule = angular.module("bookingModule", []);

	bookingModule.controller("BookingController", function($scope, $http){

		// Gives the scope access to the opening times and phone number
		$scope.openHours = "every day from 12:00 - 16:30 and 18:00 - 00:00";
		$scope.phoneNumber = "03-533-7962";
		$scope.address = "Lilienblum St 18, Tel Aviv-Yafo.";

		// Makes an array of 1 - 8
        $scope.dinerNumbers = [
        	{"number":1},
        	{"number":2},
        	{"number":3},
        	{"number":4},
        	{"number":5},
        	{"number":6},
        	{"number":7},
        	{"number":8}
        ];
        // Sets the current number in the scope to 2
        $scope.current = 1;
        // When clicking the + and - you cycle though the objects
        $scope.Increse = function(){
        	 $scope.current = ($scope.current + 1) % $scope.dinerNumbers.length;
        }
        $scope.Decrese = function(){
        	 $scope.current = ($scope.current - 1) % $scope.dinerNumbers.length;
        }

		// Runs the function to check the time and allows for display
		$scope.checkLocalTime = checkTime();

		// Array of objects with booking times for the select dropdown
		$scope.diningTimes = {
			model: null,
			avaliableOptions:[
				{id:'1',displayTime:"12:00"},
				{id:'2',displayTime:"12:15"},
				{id:'3',displayTime:"12:30"},
				{id:'4',displayTime:"12:45"},
				{id:'5',displayTime:"13:00"},
				{id:'6',displayTime:"13:15"},
				{id:'7',displayTime:"13:30"},
				{id:'8',displayTime:"13:45"},
				{id:'9',displayTime:"14:00"},
				{id:'10',displayTime:"14:15"},
				{id:'11',displayTime:"14:30"},
				{id:'12',displayTime:"14:45"},
				{id:'13',displayTime:"15:00"},
				{id:'14',displayTime:"15:15"},
				{id:'15',displayTime:"15:30"},
				{id:'16',displayTime:"15:45"},
				{id:'17',displayTime:"18:00"},
				{id:'18',displayTime:"18:15"},
				{id:'19',displayTime:"18:30"},
				{id:'20',displayTime:"18:45"},
				{id:'21',displayTime:"19:00"},
				{id:'22',displayTime:"19:15"},
				{id:'23',displayTime:"19:30"},
				{id:'24',displayTime:"19:45"},
				{id:'25',displayTime:"20:00"},
				{id:'26',displayTime:"20:15"},
				{id:'27',displayTime:"20:30"},
				{id:'28',displayTime:"20:45"},
				{id:'29',displayTime:"21:00"},
				{id:'30',displayTime:"21:15"},
				{id:'31',displayTime:"21:30"},
				{id:'32',displayTime:"21:45"},
				{id:'33',displayTime:"22:00"},
				{id:'34',displayTime:"22:15"},
				{id:'35',displayTime:"22:30"}]
		};

	});

	function checkTime(){
		
			var d = new Date();
			var h = d.getHours();
	    	var m = d.getMinutes();
	    	m = checkMinutes(m);

	    	var time = h + ":" + m;

	    	if (time >= "12:00" || time <= "16:30" || time >= "18:00" || time <= "00:00"){
	    		return "OPEN";
	    	}
	    	else {
	    		return "CLOSED";
	    	}
	}

	function checkMinutes(i) {
		    if (i < 10) {
		        i = "0" + i;
		    }
		    return i;
	}

})();