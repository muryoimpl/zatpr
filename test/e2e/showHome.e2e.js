/*global element, by*/
const assert = require('power-assert');

describe('show Home', () => {
  it('should show "こんにちは"', () => {
    element(by.className('title')).getText().then((title) => {
      assert.equal(title, 'こんにちは');
    });
  });
});
