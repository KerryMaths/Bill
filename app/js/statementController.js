
(function () {
	'use strict';
	function processStatement ($scope, getStatementFactory){

	    //call bill service
	  getStatementFactory.then(function(data){
  		$scope.statement = data.statement;
			$scope.total = data.total;
			$scope.package = data.package;
			$scope.callCharges = data.callCharges;
			$scope.skyStore = data.skyStore;

		});
	}

angular
.module('myApp')
.controller('BillController', ['$scope', 'getStatementFactory', processStatement]);

})(); 