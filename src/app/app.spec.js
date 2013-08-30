describe( 'AppCtrl', function() {
	
  beforeEach(module('ui.state'));
	
  describe( 'isCurrentState', function() {
    var AppCtrl, $location, $scope;

    beforeEach( module( 'sonOfCalamari' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( AppCtrl ).toBeTruthy();
    }));


  });
});
