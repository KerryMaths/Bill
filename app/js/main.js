//Define Angular app
//set service as a dependancy


var app = angular.module('myApp', []);

		 //service to Get Bill
		 app.factory("theBill", ['$http', function($http){
	var statement = $http.get('https://still-scrubland-9880.herokuapp.com/bill.json')
		.success(function(response){
			return response.data;
		})

		.error(function(response){
			return response.data;
		});

	return statement;
}]);

		 //Bill controller
		 app.controller('BillController', ['$scope', 'theBill',
		 function($scope, theBill){

		$scope.name = "Sky Bill";

        //call bill service
        theBill.success(function(data){
			$scope.statement = data.statement;
			$scope.total = data.total;
			$scope.package = data.package;
			$scope.callCharges = data.callCharges;
			$scope.skyStore = data.skyStore;
			console.log("Success");
			console.log(data.total);
            console.log(data);
			//console.log(response);
		});

		theBill.error(function(data){
			console.log("Error Loading file");

		});


}]);



