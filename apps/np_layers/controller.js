angular.module('npLayers', ['npAuthSrv', 'npStructSrv', 'npStructUi'])

.controller('layersCtrl', ['$scope', '$tastypieResource', '$toolbar', function($scope, $tastypieResource, $toolbar){
    $scope.$Layers = new $tastypieResource('layers', {limit:4});
    $scope.$Layers.objects.$find();
}]);