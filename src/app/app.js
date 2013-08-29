angular.module( 'sonOfCalamari', [
  'app-templates',
  'component-templates',
  'sonOfCalamari.home',
  'sonOfCalamari.about',
  'sonOfCalamari.footer',
  'ui.state' 
])

.config(function($stateProvider, $urlRouterProvider){
  //
  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/route1"); 
  //
  // Now set up the states
  $stateProvider
    .state('route1', {
      url: "/route1",
      templateUrl: "lists/route1.tpl.html"
    })
    .state('route1.list', {
      url: "/list",
      templateUrl: "lists/route1list.tpl.html",
      controller: function($scope){
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })          
    .state('route2', {
       url: "/route2",
       templateUrl: "lists/route2.tpl.html"
    })
    .state('route2.list', {
       url: "/list",
       templateUrl: "lists/route2list.tpl.html",
       controller: function($scope){
         $scope.things = ["A", "Set", "Of", "Things"];
       }
     });
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | sonOfCalamari' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

})

;

