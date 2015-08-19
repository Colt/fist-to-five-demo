app.controller('TestController', function($scope, $firebaseArray){
	var root = new Firebase("https://gschooldemo.firebaseio.com");
	var placesRef = new Firebase("https://gschooldemo.firebaseio.com/places");

	$scope.places = $firebaseArray(placesRef);

	$scope.addPlace = function(){
		var newPlace = {
			name: $scope.newPlace
		}

		$scope.places.$add(newMsg);
		$scope.newPlace = "";
	}

	$scope.remove = function(msg){
		$scope.messages.$remove(msg);
	}

});




