angular
  .module('myMod') //getter

  .directive('postDir', function(){
    return {
      restrict: 'EA',
      template: '<div class="redditPosts"> A post goes here </div>  <div class="redditPosts"> A post goes here </div>',

      replace: false
    };
  });
