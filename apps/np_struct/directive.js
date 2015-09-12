angular.module('npStructUi', [])

.directive('npListView', ['$window', '$tastypie','$compile', function ($window, $tastypie, $compile) {
    return {
        restrict: 'E',
        templateUrl: 'apps/np_struct/np-list-view.html',
        replace: true,
        transclude: true,
        scope: {
            npService: '='
        }
    }
}])