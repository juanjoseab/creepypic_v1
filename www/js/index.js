if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
var app = angular.module('creepypic',["ui.router","PhoneGap","ngTouch","btford.phonegap.ready"]);
app.config(function($stateProvider, $urlRouterProvider,$compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "pages/home.html",
                controller:"MainCtrl"
            })
            .state('create', {
                url: "/create",
                templateUrl: "pages/crear.html",
                controller:"MainCtrl"
            });
        $urlRouterProvider.otherwise("/home");

  });



app.controller("MainCtrl",['$scope', '$interval',
    function($scope,$interval,Camera,$state){
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
        
        $scope.goTo = function (estado){
            $state.go(estado);
        }


        $scope.openAlbum = function(){
            alert(0);

            Camera.getPicture(function() {}, function(error) {}, {
                destinationType: Camera.DestinationType.FILE_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                quality: 50
            });
            alert(1);
        }

        $scope.goToHome =  function(){
            window.history.back();
        }

        $scope.getPhoto = function() {
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
            /*
            alert('a');

            Camera.getPicture().then(function(imageURI) {
                alert('b');
              console.log(imageURI);
              $scope.lastPhoto = imageURI;
            }, function(err) {
                alert('c');
              console.err(err);
            }, {
              quality: 75,
              targetWidth: 320,
              targetHeight: 320,
              saveToPhotoAlbum: false
            });*/
          };

        //$scope.openAlbum();

}]);