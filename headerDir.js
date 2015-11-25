angular
  .module('myMod') //getter

  .directive('masthead', function(){
    return {
      restrict: 'EA',
      template: '<header>Im a header</header>',
      replace: false
    };
  });
