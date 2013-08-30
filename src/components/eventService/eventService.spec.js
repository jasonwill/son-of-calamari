describe( 'eventService', function() {
  var EvntCtrl, $scope, $location;

  beforeEach( module( 'sonOfCalamari' ) );

  beforeEach( inject( function( $controller, _$location_, $rootScope ) {
    $location = _$location_;
    $scope = $rootScope.$new();
    EvntCtrl = $controller( 'EvntCtrl', { $location: $location, $scope: $scope });
  }));

  it('should create "haps" model with 4 haps', function() {
    expect($scope.haps.length).toBe(4);
	});

});

