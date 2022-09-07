 var myApp = angular.module('myApp',['ngRoute']);
    myApp.config(function($routeProvider){
            $routeProvider
            .when("/",{
                templateUrl: "about.html"
            })
            .when("/about",{
                templateUrl: "about.html"
            })
            .when("/projects",{
                templateUrl: "projects.html"
            })
            
        });
        
              