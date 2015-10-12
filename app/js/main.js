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
            console.log(data);

			//subs function;
			$scope.substotalfn= (function(){
				total = 0;
				for ( i in $scope.package.subscriptions){
					total += $scope.package.subscriptions[i].cost;
					$scope.package.total = total;
				}

			});

			//call charges function;
			$scope.callChargestotalfn= (function(){
				total = 0;
				for ( i in $scope.callCharges.calls){
					total += $scope.callCharges.calls[i].cost;
					$scope.callCharges.total  = total;
				}

			});

			//sky Store function;
			$scope.skyStoretotalfn= (function(){
				total = 0;
				total2 = 0;
				for ( i in $scope.skyStore.rentals){
					total += $scope.skyStore.rentals[i].cost;
				}
				for ( i in $scope.skyStore.buyAndKeep){
					total2 += $scope.skyStore.buyAndKeep[i].cost;
					$scope.skyStore.total  = total + total2;

				}

			});

			//total bill function;
			$scope.totalfn= (function(){
				if ($scope.total !== $scope.package.total + $scope.callCharges.total + $scope.skyStore.total){
					$scope.total = $scope.package.total + $scope.callCharges.total + $scope.skyStore.total;
				}
			});

			$scope.substotalfn();
			$scope.callChargestotalfn();
			$scope.skyStoretotalfn();
			$scope.totalfn();
		});



		theBill.error(function(data){
			console.log("Error Loading file");

		});


}]);



