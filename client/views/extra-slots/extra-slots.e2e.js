'use strict';

describe('extra-slots route', function () {

  beforeEach(function () {
    browser.get('/extra/slots');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ExtraSlotsCtrl');
  });

});
