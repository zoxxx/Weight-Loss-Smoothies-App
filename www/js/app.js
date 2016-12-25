/**
 * Created by zox http://www.steadyhealth.com
 * Date: 8/7/16
 * Time: 11:44 AM
 */

var recipesApp = angular.module('recipesApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when ('/view/:index',
            {
                controller: 'ViewCtrl',
                templateUrl: 'templates/view.html'
            })
            .when('/main',
            {
                templateUrl: 'templates/main.html'
            })
            .otherwise({
                redirectTo: '/main'
            });
    })
    /*
    // if you want to cut title for some older phones with lower resolution
    .filter('truncateName', function () {
        return function (input) {
            if (input.length > 18)
                return input.slice(0,18) + '...';
            else
                return input;
        }
    })
    */
    .controller('MainCtrl', function ($scope, $location, recipes) {
        $scope.search = {};
        $scope.recipes = recipes.get();
        $scope.notFound = false;

        $scope.search.do = function () {
            if ($scope.search.query.length > 2) {
                $scope.recipes = recipes.get($scope.search.query.toLowerCase());
                if ($scope.recipes.length === 0) {
                    $scope.notFound = true;
                } else {
                    $scope.notFound = false;
                }
            } else {
                $scope.recipes = recipes.get();
            }
        };
    })
    .controller('ViewCtrl', function ($scope, $routeParams, recipes) {
        $scope.recipe = recipes.getById($routeParams.index);
        
        $scope.goBack = function () {
            window.history.back();
        };
    });
