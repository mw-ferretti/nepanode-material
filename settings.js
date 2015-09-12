angular.module('NEPAnodeApp', 
               ['ngMaterial', 
                'ngMdIcons',
                'ngRoute',
                'npStructSrv',
                'npLayers',
                'npMaps',
                'npDocuments'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('light-green');
})

.config(function($routeProvider, $locationProvider){    
    $routeProvider
    .when('/layers', {
        templateUrl: 'apps/np_layers/layers.html',
        controller: 'layersCtrl'
    })
    .when('/maps', {
        templateUrl: 'apps/np_maps/maps.html',
        controller: 'mapsCtrl'
    })
    .when('/documents', {
        templateUrl: 'apps/np_documents/documents.html',
        controller: 'documentsCtrl'
    })
    .otherwise({
        redirectTo: '/layers'
    });
})

.run(function($rootScope, $toolbar){
    $rootScope.$on('$routeChangeStart', function(event, next, current){
       switch(next.templateUrl){
          case "apps/np_layers/layers.html":
             $toolbar.title = "Explore Layers";
             break;
          case "apps/np_maps/maps.html":
             $toolbar.title = "Explore Maps";
             break;
          case "apps/np_documents/documents.html":
             $toolbar.title = "Explore Documents";
             break;
          default:
             $toolbar.title = "NEPAnode";
       }
    });
})

.controller('NEPAnodeCtrl', ['$scope', '$toolbar', '$timeout', '$mdSidenav', '$mdUtil', '$log', 
                             function($scope, $toolbar, $timeout, $mdSidenav, $mdUtil, $log){
    $scope.$toolbar = $toolbar;    
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },200);
      return debounceFn;
    }
}])

.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close left is done");
        });
    };
});
