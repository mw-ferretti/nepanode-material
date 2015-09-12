angular.module('npMaps', ['npAuthSrv', 'npStructSrv', 'npStructUi'])

.controller('mapsCtrl', ['$scope', '$tastypieResource', '$toolbar', function($scope, $tastypieResource, $toolbar){
    $scope.$Maps = new $tastypieResource('maps', {limit:4});
    $scope.$Maps.objects.$find();
}]);