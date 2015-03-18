'use strict';

describe('extra-profile route', function () {

  beforeEach(function () {
    browser.get('/extra/profile');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ExtraProfileCtrl');
  });

});
