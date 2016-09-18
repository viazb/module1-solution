(function(){
'use strict';
angular.module('Module1App', [])
.controller('ModuleController', ModuleController);

ModuleController.$inject = ['$scope'];

function ModuleController($scope){
  $scope.list="";
  $scope.message="";

$scope.count= function (){

  var num=$scope.list.split(',');

    if($scope.list == ""){
      $scope.message="Must insert text ";
    }else{
    if(num.length <= 3)
    {
      $scope.message ="¡Enjoy!";
    }
    if(num.length > 3){
      $scope.message="¡Too Much!";
    }
}
}
};
})();
