angular.module( 'sonOfCalamari', [
  'app-templates',
  'component-templates',
  'ui.state',
  'eventService', 
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
      controller: 'EvntCtrl'
    })
  ;
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | sonOfCalamari' );
})

.run(
      [        '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications. For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }]
)

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

})



;

