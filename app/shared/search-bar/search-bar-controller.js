angular.module('app')
.directive('searchBar',function(){
	return {
		'templateUrl' : 'app/shared/search-bar/search-bar-view.html',
		'controller' : 'searchBarController'
	}
})
.controller('searchBarController',['$scope', function($scope) {
	//
}]);