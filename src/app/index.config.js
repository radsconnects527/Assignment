(function() {
  'use strict';

  angular
    .module('agreeya')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
