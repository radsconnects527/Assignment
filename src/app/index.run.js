(function() {
  'use strict';

  angular
    .module('agreeya')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
