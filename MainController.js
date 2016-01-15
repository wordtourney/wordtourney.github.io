app.directive('word_definitions', function() {
	return {
  	restrict: 'E',
    scope: {
    	info: '='
    },
    templateUrl: 'word_definitions.html'
  };
});
