'use strict';

describe('messages route', function () {

  beforeEach(function () {
    browser.get('/messages');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('MessagesCtrl');
  });

});
