(function() {
  function ModalCtrl(Room, $uibModalInstance, $cookies) {
    var modal = this;
    modal.cancel = function () {
      $uibModalInstance.dismiss();
    };

    modal.createRoom = function () {
      console.log(modal.newRoom);
      Room.add(modal.newRoom);
      $uibModalInstance.close();
    };

    modal.createUsername = function () {
      $cookies.put('blocChatCurrentUser', modal.username);
      $uibModalInstance.close();
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
