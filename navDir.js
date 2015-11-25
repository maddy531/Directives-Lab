angular
  .module('myMod') //getter

  .directive('navDir', function(){
    return {
      restrict: 'EA',
      template: '<nav> <ul> <li>hot</li> <li>new</li> <li>rising</li> <li>top</li><li>glided</li> <li>wiki</li><li>promoted</li><ul></nav>',
      replace: false
    };
  });
