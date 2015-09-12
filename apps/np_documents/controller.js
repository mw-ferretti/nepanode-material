angular.module('npDocuments', ['npAuthSrv', 'npStructSrv', 'npStructUi'])

.controller('documentsCtrl', ['$scope', '$tastypieResource', '$toolbar', function($scope, $tastypieResource, $toolbar){
    $scope.$Documents = new $tastypieResource('documents', {limit:4});
    $scope.$Documents.objects.$find();
}]);