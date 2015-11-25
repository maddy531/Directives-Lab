angular
  .module('myMod') //getter

  .directive('rulesDir', function(){
    return {
      restrict: 'EA',
      template: '<div class="rules"> <h4>Rules</h4> <p> Some rules that come with this page</p></div>',
      replace: false
    };
  });
