/* global $,$$,protractor,browser,element,by */
/* eslint security/detect-object-injection: 0 */
import assert from 'power-assert';
import _ from 'lodash';
import fs from 'fs';
import FileUtils from '../../utils/FileUtils';

describe('show Home', () => {
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

  describe('show or hide form in Home component', () => {
    beforeEach(() => {
      browser.refresh();

      assert($('a#show-form-button').isPresent(), true);
      assert($('a#hide-form-button').isPresent(), false);
    });

    afterEach(() => {
      fs.rmdirSync(FileUtils.slideDir('テストタイトル'));
    });

    it('should show form and hide form', () => {
      $('a#show-form-button').click();
      $('.directory-name').sendKeys('テストタイトル');
      $('.directory-name').sendKeys(protractor.Key.ENTER);

      assert($('a#show-form-button').isPresent(), true);
      assert($('a#hide-form-button').isPresent(), false);
    });
  });

  describe('validation', () => {
    beforeEach(() => {
      browser.refresh();

      $('a#show-form-button').click();
    });

    context('when title is over 31 characters', () => {
      beforeEach(() => {
        const OVER_LIMITATION_LENGTH = 31;
        const tooLongString = _.repeat('a', OVER_LIMITATION_LENGTH);

        $('.directory-name').sendKeys(tooLongString);
        $('.directory-name').sendKeys(protractor.Key.ENTER);
      });

      it('should show error(too long)', () => {
        $('span.error').getText().then((text) => {
          assert(text, 'too long(max 30 chars)');
        });
      });
    });

    context('when the directory already exists', () => {
      beforeEach(() => {
        FileUtils.createSlideDir('aaa');

        $('.directory-name').sendKeys('aaa');
        $('.directory-name').sendKeys(protractor.Key.ENTER);
      });

      afterEach(() => {
        fs.rmdirSync(FileUtils.slideDir('aaa'));
      });

      it('should show error(already exists)', () => {
        $('span.error').getText().then((text) => {
          assert(text, 'already exists');
        });
      });
    });
  });

  describe('show directories in baseDir', () => {
    beforeEach(() => {
      browser.refresh();

      FileUtils.createSlideDir('あああ');
      FileUtils.createSlideDir('test');
    });

    afterEach(() => {
      fs.rmdirSync(FileUtils.slideDir('あああ'));
      fs.rmdirSync(FileUtils.slideDir('test'));
    });

    it('show directories in list ordered by birthtime desc', () => {
      const labels = ['test', 'あああ'];

      element.all(by.css('a.name')).then((items) => {
        assert.equal(items.length, 2);
      });

      $$('a.name').each((elm, i) => {
        elm.getText().then((text) => {
          assert.equal(text, labels[i]);
        });
      });
    });
  });
});
