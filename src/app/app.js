angular.module( 'sonOfCalamari', [
  'app-templates',
  'component-templates',
  'ui.state',
  'titleService' 
])

.config(function($stateProvider, $urlRouterProvider){
  //
  // For any unmatched url, send to /list
  $urlRouterProvider.otherwise("/list"); 
  //
  // Now set up the states
  $stateProvider
    .state('detail', {
      url: "/detail",
      templateUrl: "events/detail.tpl.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "events/list.tpl.html",
      controller: function($scope){
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
  ;
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | sonOfCalamari' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

})

;

