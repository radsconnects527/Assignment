(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('agreeya'));
    beforeEach(inject(function(_$controller_) {
      
      vm = _$controller_('MainController');
    }));
      
    it('should get results from stack exchange', function() {
      vm.searchKey = "java";
      vm.searchExchange();
      expect(vm.myData.length).not.toBeNull();    
    }); 
      
    it('should not get results from stack exchange', function() {
      vm.searchKey = null;
      vm.searchExchange();
      expect(vm.myData.length).toEqual(0);    
    });  
  });
})();
