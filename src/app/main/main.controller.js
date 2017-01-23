(function() {
  'use strict';

  angular
    .module('agreeya')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$http) {
    var vm = this;
    vm.searchExchange= searchExchange;
    vm.myData = [];
    vm.gridOptions={
        data: vm.myData,
        columnDefs: [{ field: 'score', displayName: 'Score', width: 80 },
                     { field: 'answer_count', displayName: 'Answer Count', width: 130 },
                     { field: 'view_count', displayName: 'View Count', width: 110 },
                     { field: 'tags', displayName: 'Tags', width: 300 },
                     { field: 'link', displayName: 'Link', width: 80, padding: 5,
                      cellTemplate:'<div>' +
                       '  <a href="{{ grid.getCellValue(row, col) }}" target="blank" style="padding: 5px 5px 0px 5px">Link</a>' +
                       '</div>' 
                     
                     }]
        
    } 
       
    function searchExchange(){
        
         vm.myData = [];
         vm.gridOptions.data = vm.myData;
        
        if(!vm.searchKey) {
            return;
        }
        
        var url = "https://api.stackexchange.com/2.2/search?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&intitle="+vm.searchKey+"&filter=default";
      
  
        $http.get(url)
        .then(function(response) {
            
            var items = response.data.items;
            
            
            for(var i=0; i<=items.length-1; i++)
                {
                    var obj={};
                    obj.answer_count = items[i].answer_count;
                    obj.creation_date = items[i].creation_date;
                    obj.view_count = items[i].view_count;
                    obj.score = items[i].score;
                    obj.tags = items[i].tags;
                    obj.link = items[i].link;
                    vm.myData.push(obj);
                    
                }
            
        }); 
        
    }
      
  }
})();
