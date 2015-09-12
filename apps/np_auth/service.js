angular.module('npAuthSrv', ['ngResourceTastypie'])

.config(function($tastypieProvider){
    $tastypieProvider.setResourceUrl('http://nepanode.anl.gov/api/');
});