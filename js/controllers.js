app.controller('TestController', function($scope, $firebaseArray){
	// var root = new Firebase("https://gschooldemo.firebaseio.com");
	var messagesRef = new Firebase("https://gschooldemo.firebaseio.com/messages");

	$scope.messages = $firebaseArray(messagesRef);

	$scope.sendMessage = function(){
		var newMsg = {
			user: $scope.user,
			text: $scope.message,
			date: new Date(),
			img: $scope.img
		}

		console.log(newMsg)

		$scope.messages.$add(newMsg);
		$scope.message = "";
	}

	$scope.remove = function(msg){
		$scope.messages.$remove(msg);
	}

});




