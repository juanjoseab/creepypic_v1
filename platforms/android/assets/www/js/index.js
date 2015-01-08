var app = angular.module('creepypic',["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

        /*
        $routeProvider.
        when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'MainCtrl'
        })
        .when('/crear', {
            templateUrl: 'pages/crear.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });*/

        
        $stateProvider
            .state('app', {
                url: "/home",
                templateUrl: "pages/home.html",
                controller:"MainCtrl"
            })
            .state('app.create', {
                url: "/create",
                templateUrl: "pages/create.html",
                controller:"MainCtrl"
            });
        $urlRouterProvider.otherwise("/home");

  });

app.controller("MainCtrl",['$scope', '$interval',
    function($scope,$interval,Camera){
        $scope.resizeBody = function() {          
            //jQuery('#general-wrapper').css('heignt', $scope.device_height + 500 + 'px');
            //console.log(jQuery('#general-wrapper').css('heignt'))
            $interval(function() {                
                $scope.device_height = angular.element(window).height();
                //console.log($scope.device_height);
                jQuery('#general-wrapper').css('height', $scope.device_height + 'px');
            }, 100);
        };
        $scope.resizeBody();
        
        $scope.openAlbum = function(){
            console.log(123);
            navigator.camera.getPicture(function(){}, function(){}, { quality: 50,
                destinationType: Camera.DestinationType.FILE_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
            });


            /*Camera.getPicture(function(image) {
                $scope.$apply(function() {
                    $scope.imageData = image;
                });
            }, function(error) {
                $scope.$apply(function() {
                    $scope.error = error;
                });
            }, {
                destinationType: Camera.DestinationType.FILE_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.JPEG,
                quality: 50
            });*/
            console.info(589);
        }

        //$scope.openAlbum();

}]);