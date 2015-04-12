'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Somador/);
    });

    it('should display the result when the inputs change', function() {
      var inputA = element.all(by.css('input[ng-model="a"]')).first();
      inputA.sendKeys('2');

      var result = element.all(by.css('span')).first();
      expect(result.getText()).toBe('2');
    });

  });

});