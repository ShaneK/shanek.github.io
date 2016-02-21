;
(function() {
  angular.module('shaneki.ng')
    .controller('MainController', MainController);

  MainController.$inject = ['$interval'];

  function MainController($interval) {
    var self = this;

    self.enlarge = false;

    $interval(function() {
      self.enlarge = !self.enlarge;
    }, 1000);
  }
})();
