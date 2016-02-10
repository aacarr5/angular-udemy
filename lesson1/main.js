var app=angular.module('minmax',['jcs-autoValidate'])

app.controller("MinMaxCtrl",function($scope,$http) {
  $scope.formModel = {};

  $scope.onSubmit = function(){


  	$http.post('https://minmax-server.herokuapp.com/register/',$scope.formModel).
  	success(function(data){
  		console.log(":)");
      console.log($scope.formModel);
  	}).
  	error(function(error){
  		console.log(error)
  	})
  }
});
