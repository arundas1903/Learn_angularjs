function studentController($scope){
	$scope.student = {
		firstName: "Arundas",
		lastName: "Ramadasan",
		fullName : function(){
			var studentObj = $scope.student;
			return studentObj.firstName + " " + studentObj.lastName;
		} 
	}
}