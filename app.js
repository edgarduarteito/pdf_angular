var app = angular.module('app', ['pdf']);
 
app.controller('pdfCtrl', function($scope) {
 
  $scope.pdfName = 'level01';
  $scope.pdfUrl = 'level01.pdf';
  $scope.scroll = 0;
 
  $scope.getNavStyle = function(scroll) {
    if(scroll > 100) return 'pdf-controls fixed';
    else return 'pdf-controls';
  }
 
});

