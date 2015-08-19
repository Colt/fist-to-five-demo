app.controller('TestController', function($scope, $firebaseArray){
	var root = new Firebase("https://gschooldemo.firebaseio.com");
	var scoresRef = new Firebase("https://gschooldemo.firebaseio.com/test/-Jx3_ObiBa1KhP9FgfSG/data");
		Chart.defaults.global.colours = ["#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#27ae60","#c0392b", "#c0392b"]

		

	console.log(Chart.defaults.global.colours)

	$scope.labels = ["One", "Two", "Three", "Four", "Five"];
  $scope.data = [1,1,1,1,1];
  $scope.voted = false;

	$scope.responses = $firebaseArray(scoresRef)

	$scope.responses.$loaded().then(function(data){
		$scope.data = data.map(function(x){return x.$value});
	})

	$scope.responses.$watch(function(event) {
  	var newVal = $scope.responses.$getRecord(event.key).$value
  	var i = parseInt(event.key);
  	$scope.data[i] = newVal;
	});

	// $scope.test = $scope.responses.map(function(data){
	// 	return data.$value
	// })

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

	$scope.reset = function(){
		$scope.responses[0].$value = 1;
		$scope.responses[1].$value = 1;
		$scope.responses[2].$value = 1;
		$scope.responses[3].$value = 1;
		$scope.responses[4].$value = 1;
		$scope.responses.$save(0)
		$scope.responses.$save(1)
		$scope.responses.$save(2)
		$scope.responses.$save(3)
		$scope.responses.$save(4)

		// then(function(){
		// 	$scope.data = $scope.responses.map(function(x){return x.$value});
		// })
	}

	$scope.addPlace = function(vote){
		$scope.responses[vote].$value += 1;
		$scope.responses.$save(vote).then(function(){
			$scope.data = $scope.responses.map(function(x){return x.$value});
		})
	}

	$scope.remove = function(msg){
		$scope.messages.$remove(msg);
	}

});


