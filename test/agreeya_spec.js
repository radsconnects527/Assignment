
describe('test website for input field on home page', function() {
    
  it('to test results from apistackexchange', function() {
    browser.get('http://localhost:3000/#/');

    element(by.model('main.searchKey')).sendKeys('java');
    var searchButton = element(by.css('.search-button'));
    searchButton.click();  
      
    expect(by.model('main.myData.length')).not.toBeNull(); 
      
  });
    
});

