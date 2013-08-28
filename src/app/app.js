angular.module( 'sonOfCalamari', [
  'app-templates',
  'component-templates',
  'sonOfCalamari.home',
  'sonOfCalamari.about',
  'sonOfCalamari.footer',
  'ui.route'
])

.config( function myAppConfig ( $routeProvider ) {
  $routeProvider.otherwise({ redirectTo: '/home' });
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | sonOfCalamari' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

