import assert from 'power-assert';
import fs from 'fs-extra';
import FileUtils, { BASEDIR } from '../../../utils/FileUtils';
import mock from 'mock-fs';

describe('FileUtils', () => {
  describe('.createBaseDir', () => {
    describe('when not exist BASEDIR', () => {
      beforeEach(() => {
        mock.fs({
          BASEDIR: fs.rmdir(BASEDIR)
        });
      });
      afterEach(() => {
        mock.restore();
      });

      it('should not exist dir', () => {
        assert(fs.existsSync(BASEDIR) === false);
      });

      it('should exist dir', (done) => {
        FileUtils.createBaseDir();
        done();
        assert.ok(fs.existsSync(BASEDIR));
      });
    });

    describe('already exists', () => {
      beforeEach(() => {
        mock.fs({ BASEDIR: {} });
      });
      afterEach(() => {
        mock.restore();
      });

      it('should return true', () => {
        assert.ok(FileUtils.createBaseDir());
      });
      it('should exist BASEDIR', () => {
        assert.ok(fs.existsSync(BASEDIR));
      });
    });
  });
});
