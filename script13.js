let app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
  $scope.distance = 0;
  $scope.calcularTotal = function () {
    if ($scope.distance <= 300) {
      return 250;
    } else if ($scope.distance <= 1000) {
      return 250 + 30 * ($scope.distance - 300);
    } else {
      return 250 + 30 * (1000 - 300) + 20 * ($scope.distance - 1000);
    }

    
  };
  $scope.descuento=function(){
    if ($scope.calcularTotal()>500){
        return 0.9*($scope.calcularTotal())
    }
  }
});