angular.module('yieme.aboutme', [])
.factory('$aboutMe', ['$http', '$log', '$q', function ($http, $log, $q) {
  return {
    get: function(url) {
      var deferred = $q.defer(),
          node     = Math.floor(Math.random() * 2) + 1,
          url      = url || 'https://ajaxhttpheaders' + node + '.appspot.com';

      $http.jsonp(url + '?callback=JSON_CALLBACK')
      .success(function(data) {
        var language = data['Accept-Language'] || '',
        geo          = data['X-Appengine-Citylatlong'] || ',',
        latitude     = geo.split(',')[0],
        longitude    = geo.split(',')[1],
        result       = {
          "language":  language.split(';')[0].split(',')[0],
          "city":      data['X-Appengine-City'],
          "region":    data['X-Appengine-Region'],
          "country":   data['X-Appengine-Country'],
          "latitude":  (latitude.length > 0)  ? parseFloat(latitude)  : undefined,
          "longitude": (longitude.length > 0) ? parseFloat(longitude) : undefined,
          "ua":        data['User-Agent']
        };
        deferred.resolve(result);
      }).error(function(msg, code) {
        deferred.reject(msg);
        $log.error(msg, code);
      });

      return deferred.promise;
    }
  }
}]);
