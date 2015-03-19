'use strict';

describe('pro-offers route', function () {

  beforeEach(function () {
    browser.get('/pro/offers');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ProOffersCtrl');
  });

});
