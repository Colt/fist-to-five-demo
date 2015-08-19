app.controller('TestController', function($scope, $firebaseObject){
	var root = new Firebase("https://gschooldemo.firebaseio.com");
	var scoresRef = new Firebase("https://gschooldemo.firebaseio.com/test/-Jx3_ObiBa1KhP9FgfSG/data");

	$scope.labels = ["One", "Two", "Three", "Four", "Five"];
  $scope.data = [1,4,10,10,1];

	$scope.responses = $firebaseObject(scoresRef);

	// $scope.responses.$add({2:5})
	// $scope.responses.$add({3:10})
	// $scope.responses.$add({4:11})
	// $scope.responses.$add({
	// 	1:4,
	// 	2:5,
	// 	3:10,
	// 	4:11,
	// 	5:5
	// })

	// $scope.responses.$add({data: [2,4,10,10]})
	// $scope.responses.$add(newMsg);

	$scope.addPlace = function(){

		$scope.data = [10,10,10,10,10];
		// var newPlace = {
		// 	name: $scope.newPlace
		// }

		// $scope.places.$add(newMsg);
		// $scope.newPlace = "";
	}

	$scope.remove = function(msg){
		$scope.messages.$remove(msg);
	}

});


