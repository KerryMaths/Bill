(function () {
	
	function getBillJson ($http){

		var statement = $http.get('https://still-scrubland-9880.herokuapp.com/bill.json')
		.then(function(response){
		return response.data;
		})

		return statement;
	}

//service to Get Bill
	angular
	.module('myApp')
	.factory("getStatementFactory", ['$http', getBillJson]);

})(); 