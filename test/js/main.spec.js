describe('BillController', function(){
    var $rootScope,
        $scope,
        controller,
        theBill;
    var $httpBackend = null;
    
    beforeEach(function () {
        module('myApp');
        
        inject(function ($injector){
            $rootScope= $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("BillController",{$scope: $scope});
            theBill = $injector.get('theBill');
        });
    });

    beforeEach(inject(function(_$httpBackend_){
        $httpBackend = _$httpBackend_;
    }));

    afterEach(inject(function(){
       // $httpBackend.verifyNoOutstandingExpectation();
        //$httpBackend.verifyNoOutstandingRequest();
    }));

    describe('Initialization', function(){
    it('should instantiate name toBe Sky Bill', function(){
        expect($scope.name).toBe("Sky Bill");
    });
});

   describe('Initialization', function(){
        it('should instantiate theBill Service toBe true', function(){
            expect(theBill).toBeTruthy();
        });
    });


    describe('Controller', function(){

        describe('response', function(){

            it("should return json data", function(){

              var data = $httpBackend.whenGET('https://still-scrubland-9880.herokuapp.com/bill.json').respond({
                  "statement": {
                      "generated": "2015-01-11",
                      "due": "2015-01-25",
                      "period": {
                          "from": "2015-01-26",
                          "to": "2015-02-25"
                      }
                  },
                  "total": 136.03,
                  "package": {
                      "subscriptions": [
                          { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
                          { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
                          { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
                      ],
                      "total": 71.40
                  },
                  "callCharges": {
                      "calls": [
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                          { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }
                      ],
                      "total": 59.64
                  },
                  "skyStore": {
                      "rentals": [
                          { "title": "50 Shades of Grey", "cost": 4.99 }
                      ],
                      "buyAndKeep": [
                          { "title": "That's what she said", "cost": 9.99 },
                          { "title": "Brokeback mountain", "cost": 9.99 }
                      ],
                      "total": 24.97
                  }
              });

                $httpBackend.flush();
                expect($scope.statement.generated).toEqual("2015-01-11");
                expect($scope.total).toEqual(156.01000000000002);
                expect($scope.package.subscriptions[0].name).toEqual("Variety with Movies HD");
                expect($scope.callCharges.calls.length).toEqual(28);
                expect($scope.skyStore.total).toEqual(24.97)

            });

            it("should ammend data if calculations are in correct", function(){

                var data = $httpBackend.whenGET('https://still-scrubland-9880.herokuapp.com/bill.json').respond({
                    "statement": {
                        "generated": "2015-01-11",
                        "due": "2015-01-25",
                        "period": {
                            "from": "2015-01-26",
                            "to": "2015-02-25"
                        }
                    },
                    "total": 136.03,
                    "package": {
                        "subscriptions": [
                            { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
                            { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
                            { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
                        ],
                        "total": 71.40
                    },
                    "callCharges": {
                        "calls": [
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
                            { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }
                        ],
                        "total": 59.64
                    },
                    "skyStore": {
                        "rentals": [
                            { "title": "50 Shades of Grey", "cost": 4.99 }
                        ],
                        "buyAndKeep": [
                            { "title": "That's what she said", "cost": 9.99 },
                            { "title": "Brokeback mountain", "cost": 9.99 }
                        ],
                        "total": 24.97
                    }
                });

                $httpBackend.flush();

                $scope.total = 123;
                $scope.totalfn();
                expect($scope.total).toEqual(156.01000000000002);

                $scope.package.total = 57.6;
                $scope.substotalfn();
                expect($scope.package.total).toEqual(71.40 );

                $scope.callCharges.total = 683.45;
                $scope.callChargestotalfn();
                expect($scope.callCharges.total).toEqual(59.64000000000002);

                $scope.skyStore.total = 89.3;
                $scope.skyStoretotalfn();
                expect($scope.skyStore.total).toEqual(24.97)

            });



        });

    });

});


