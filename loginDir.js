angular
  .module('myMod') //getter

  .directive('login', function(){
    return {
      restrict: 'EA',
      template: '<form class="righty"> <h4>Submit a link</h4> <input type="text" name="firstname" placeholder="username"> <input type="text" email="email" placeholder="email"> <br> <button>Submit</button></form>',
      replace: false
    };
  });
