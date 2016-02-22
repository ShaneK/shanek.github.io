;
(function() {
  angular.module('shaneki.ng')
    .controller('MainController', MainController);

  MainController.$inject = [];

  function MainController() {
    var self = this;

    var headerImages = ['lake', 'lake2', 'lake3', 'mountain'];
    var index = Math.floor(Math.random() * headerImages.length);
    console.log("INDEX:", index);
    self.headerImage = 'url("img/' + headerImages[index] + '.jpg")';
  }
})();
