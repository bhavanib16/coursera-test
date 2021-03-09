( function () {

'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  //$scope.items = null;
  $scope.items = " ";
  $scope.msg = '';
  $scope.noOfItems = 0;
  $scope.customStyle = {};
  $scope.itemsArr1 = [];

  $scope.countItems = function () {
    //if ($scope.items != null){
      $scope.itemsArr = $scope.items.split(',');
      var i;
      for (i = 0; i < $scope.itemsArr.length; i++) {
        $scope.itemsArr1[i] = $scope.itemsArr[i].replace(/\s/g, "")
        if ($scope.itemsArr1[i] != "") {
          $scope.noOfItems += 1;
          }
        }
      //}
   };

  $scope.showOrderStatus = function () {
      if ($scope.noOfItems >= 4) {
        $scope.customStyle.style = {"color":"green"};
        $scope.msg = 'Too much!';
      } else if ($scope.noOfItems > 0 && $scope.noOfItems <= 3 ) {
        $scope.customStyle.style = {"color":"green"};
        $scope.msg = 'Enjoy!';
      } else {
        $scope.customStyle.style = {"color":"red"};
        $scope.msg = 'Please enter data first';
      }
      $scope.noOfItems = 0;
      //$scope.items = null;
    };

  };

})();
