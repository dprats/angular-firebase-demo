var myApp = angular.module("myApp",["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray", function($scope, $firebaseArray){

	var ref = new Firebase("https://whuzszf6njr.firebaseio-demo.com/");
	$scope.messages = $firebaseArray(ref);
	// $scope.messages = [
	// 	{
	// 		username: 'Joe',
	// 		body: 'Hello!'
	// 	}
	// ];

	console.log('Hi from Controller');
	console.log($scope.messages);

	//Add message method
	$scope.addMessage = function(e){

		//listen for the return key
		if (e.keyCode == 13 && $scope.msg){
			//allow custom or anonymous user names
			var name  = $scope.name || "anonymous";

			//add the message to Firebase
			$scope.messages.$add({from: name, body: $scope.msg})

			//reset the message
			$scope.msg = '';
		}
		
		

	}


}]);