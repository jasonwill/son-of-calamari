angular.module( 'sonOfCalamari.about', [
  'titleService'
])

.config(function config( $routeProvider ) {
  $routeProvider.when( '/about', {
    controller: 'AboutCtrl',
    templateUrl: 'about/about.tpl.html'
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope, titleService ) {
  titleService.setTitle( 'What is It?' );
  
})

;
