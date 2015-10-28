(function () {

	function processStatement ($scope, getStatementFactory){

	     //call bill service
	    getStatementFactory.then(function(data){
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
	}

angular
.module('myApp')
.controller('BillController', ['$scope', 'getStatementFactory', processStatement])

})(); 