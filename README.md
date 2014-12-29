ng-aboutme
==========

AngularJS Factory for browser language and geo via service

```html
<body ng-app="testApp" ng-controller="testCtrl">
<p>{{about.language}}</p>
<p>{{about.city}}, {{about.region}} {{about.country}}</p>
<p>{{about.latitude}}, {{about.longitude}}</p>
<p>{{about.ua}}</p>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.8/angular.min.js"></script>
<script src="/ng-aboutme.js"></script>
<script>
  angular.module('testApp', ['yieme.aboutme'])
  .controller('testCtrl', ['$scope', '$aboutMe', function($scope, $aboutMe){
    $aboutMe.get().then(function(data) {
      $scope.about = data;
    })
  }]);
</script>
</body>
```
