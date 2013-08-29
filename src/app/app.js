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
      templateUrl: "eventService/detail.tpl.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "eventService/list.tpl.html",
      controller: function($scope){
        $scope.haps = ["Assignment 1", "Quiz 1", "Project 2", "Quiz 2"];
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

