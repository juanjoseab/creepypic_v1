/*
angular.module('starter.services', [])

.factory('Camera', ['$q', function($q) {
 
  return {
    test: function(){
      alert(0);
    },
    getPicture: function(options) {
      alert(1);
      var q = $q.defer();
      
      navigator.camera.getPicture(function(result) {
        alert(2);
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        alert(3);
        q.reject(err);
      }, options);
      
      return q.promise;
    }
  }
}])


.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
*/