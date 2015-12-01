import assert    from 'power-assert';
import fs        from 'fs-extra';
import os        from 'os';
import FileUtils from '../../../utils/FileUtils';
import sinon     from 'sinon';
import path      from 'path';

describe('FileUtils', () => {
  describe('.createSlideDir', () => {
    describe('when not exist $HOME/.zatpr', () => {
      beforeEach(() => {
        fs.removeSync(path.join(os.tmpdir(), '.zatpr'));
        sinon.stub(FileUtils, 'homeDir').returns(os.tmpdir());
      });
      afterEach(() => {
        FileUtils.homeDir.restore();
      });

      it('should return false before calling FileUtils.createSlideDir', () => {
        assert(fs.existsSync(FileUtils.baseDir()) === false);
      });

      it('should create $HOME/.zatpr', (done) => {
        assert.ok(FileUtils.createSlideDir());
        done();
        assert.ok(fs.existsSync(FileUtils.baseDir()));
      });
    });

    describe('when already exists $HOME/.zatpr', () => {
      beforeEach(() => {
        fs.mkdirpSync(path.join(os.tmpdir(), '.zatpr'));
        sinon.stub(FileUtils, 'homeDir').returns(os.tmpdir());
      });
      afterEach(() => {
        FileUtils.homeDir.restore();
      });

      it('should return true', () => {
        assert.ok(FileUtils.createSlideDir());
      });

      it('should create $HOME/.zatpr', () => {
        assert.ok(fs.existsSync(FileUtils.baseDir()));
      });
    });

    describe('when having argument, slidePath', () => {
      beforeEach(() => {
        fs.removeSync(path.join(os.tmpdir(), '.zatpr', 'あ'));
        sinon.stub(FileUtils, 'homeDir').returns(os.tmpdir());
      });
      afterEach(() => {
        FileUtils.homeDir.restore();
      });

      it('should create baseDir/slidePath', (done) => {
        FileUtils.createSlideDir('あ');
        assert.ok(fs.existsSync(path.join(FileUtils.baseDir(), 'あ')));
        done();
      });
    });
  });
});
