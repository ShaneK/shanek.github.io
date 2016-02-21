;
(function() {
  angular.module('shaneki.ng')
    .controller('MainController', MainController);

  MainController.$inject = [];

  function MainController() {
    var self = this;

    self.data = '1';
  }
})();
