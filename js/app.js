angular.module('feCalculator', [])

.controller('mainController', ['$scope','$http', function ($scope) {


	var vm = this;
	$scope.rates= {};
	vm.message = 'Hey there!';
	
	vm.currencies = 
    [
        {
            currency: 'USD',
            value: 0.074017,
            description: 'US Dollar'
        },
        {
            currency: 'EUR',
            value: 0.065351,
            description: 'Euro'
        },
        {
            currency: 'GBP',
            value: 0.056553,
            description: 'Pound'
        },
        {
            currency: 'YEN',
            value: 7.4193,
            description: 'Yen'
        },
        {
            currency: 'INR',
            value: 4.9723,
            description: 'Rupee'
        }
        
    ];


$scope.convertFrom = function(){

var fromVal = $scope.fromValue
var toVal = $scope.toValue

if(toVal==0 && fromVal==null)
{
$scope.message="";
}
else if((toVal==null || toVal>=0)&&(fromVal>=0))
{

$scope.message="";
$scope.toValue = $scope.fromValue * ($scope.target.value* (1 / $scope.source.value));
$scope.toValue = $scope.toValue;
}
else if((fromVal==null || fromVal>=0)&&(toVal>=0))

{

$scope.message="";
$scope.fromValue = $scope.toValue * ($scope.source.value* (1 / $scope.target.value));
$scope.fromValue = $scope.fromValue;

}

else
{
    $scope.message="Please enter valid amount";
}

};



$scope.convertTo= function(){
console.log("second text");
var toVal = $scope.toValue
if(toVal>=0 || toVal==null)
{
$scope.message="";
$scope.fromValue = $scope.toValue * ($scope.source.value* (1 / $scope.target.value));
$scope.fromValue = $scope.fromValue;
}
else
{
    $scope.message="Please enter valid amount";
}

};

}]);


