app.controller('VotesController', function($scope, $firebaseArray){
	var scoresRef = new Firebase("https://gschooldemo.firebaseio.com/test/-Jx3_ObiBa1KhP9FgfSG/data");
	Chart.defaults.global.colours = ["#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#27ae60","#c0392b", "#c0392b"]
	$scope.labels = ["One", "Two", "Three", "Four", "Five"];
	$scope.responses = $firebaseArray(scoresRef)

	$scope.responses.$loaded().then(function(data){
		$scope.data = data.map(function(x){return x.$value});
	})

	$scope.responses.$watch(function(event) {
  	var newVal = $scope.responses.$getRecord(event.key).$value
  	var i = parseInt(event.key);
  	$scope.data[i] = newVal;
	});

	$scope.reset = function(){
		//obviously need to refactor this
		$scope.responses[0].$value = 0;
		$scope.responses[1].$value = 0;
		$scope.responses[2].$value = 0;
		$scope.responses[3].$value = 0;
		$scope.responses[4].$value = 0;
		$scope.responses.$save(0)
		$scope.responses.$save(1)
		$scope.responses.$save(2)
		$scope.responses.$save(3)
		$scope.responses.$save(4)
	}

	$scope.vote = function(vote){
		$scope.responses[vote].$value += 1;
		$scope.responses.$save(vote).then(function(){
			$scope.data = $scope.responses.map(function(x){return x.$value});
		})
	}

});


