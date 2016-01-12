/* global $, protractor, browser */
import assert from 'power-assert';
import _ from 'lodash';
import FileUtils from '../../utils/FileUtils';

describe('show Home', () => {
  beforeEach(() => {
    browser.refresh();
  });

  it('should show "ZATPR"', () => {
    $('.pure-menu-heading').getText().then((title) => {
      assert.equal(title, 'ZATPR');
    });
  });

  it('should be "directory name" as placeholder', () => {
    $('.directory-name').getAttribute('placeholder').then((placeholder) => {
      assert.equal(placeholder, 'directory name');
    });
  });

  it('should show form and hide form', () => {
    assert($('a#show-form-button').isPresent(), true);
    assert($('a#hide-form-button').isPresent(), false);

    $('a#show-form-button').click();

    $('.directory-name').sendKeys('テストタイトル');
    $('.directory-name').sendKeys(protractor.Key.ENTER);

    assert($('a#show-form-button').isPresent(), true);
    assert($('a#hide-form-button').isPresent(), false);
  });

  it('should show validation error(too long)', () => {
    $('a#show-form-button').click();
    const OVER_LIMITATION_LENGTH = 31;
    const tooLongString = _.repeat('a', OVER_LIMITATION_LENGTH);

    $('.directory-name').sendKeys(tooLongString);
    $('.directory-name').sendKeys(protractor.Key.ENTER);

    $('span.error').getText().then((text) => {
      assert(text, 'too long(max 30 chars)');
    });
  });

  it('should show validation error(already exists)', () => {
    FileUtils.createSlideDir('aaa');

    $('a#show-form-button').click();
    $('.directory-name').sendKeys('aaa');
    $('.directory-name').sendKeys(protractor.Key.ENTER);

    $('span.error').getText().then((text) => {
      assert(text, 'already exists');
    });
  });
});
