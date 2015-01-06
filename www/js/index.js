var app = angular.module('creepypic',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
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
        });
  }]);

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
            Camera.getPicture(function(image) {
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
            });
        }

        $scope.openAlbum();

}]);