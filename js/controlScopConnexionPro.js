app.controller('myCtrlConnexion', function($scope){
	$scope.adresse = "";
	$scope.password = "";
	$scope.acces = true;
	$scope.newUs = false;



	$scope.connecter = function(){
		if ($scope.password == 'simplon' && $scope.adresse == "") {
			return $scope.acces = false;
		} else {
			return $scope.password ="";
		}
	};

	$scope.count = 0;
	$scope.acheter = function () {
		$scope.count = $scope.count +1;
	};
});
