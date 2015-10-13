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

			var rentalTotal = 0;
			var buyAndKeepTotal = 0;
			for ( i in $scope.skyStore.rentals){
				rentalTotal += $scope.skyStore.rentals[i].cost;
			}

			for ( i in $scope.skyStore.buyAndKeep){
				buyAndKeepTotal += $scope.skyStore.buyAndKeep[i].cost;

			}

			//sky Store function;
			$scope.skyStoretotalfn= (function(){
				$scope.skyStore.total  = rentalTotal + buyAndKeepTotal;
			});

			//total bill function;
			$scope.totalfn= (function(){
				if ($scope.total !== $scope.package.total + $scope.callCharges.total + $scope.skyStore.total){
					$scope.total = $scope.package.total + $scope.callCharges.total + $scope.skyStore.total - buyAndKeepTotal;
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




