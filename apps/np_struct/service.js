angular.module('npStructSrv', ['ngMaterial'])

.service('$toolbar', ['$location', function($location){
    var self = this;    
    self.title = '';
    self.location = function(path){
        $location.path(path);
    }
}]);