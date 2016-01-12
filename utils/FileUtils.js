const fs   = require('fs-extra');
const path = require('path');
const os   = require('os');

const FileUtils = {
  createBaseDir: function() {
    fs.mkdirp(path.join(FileUtils.baseDir()), (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    return true;
  },

  createSlideDir: function(_slidePath) {
    const slidePath = (_slidePath) ? _slidePath : '';

    fs.mkdirp(path.join(FileUtils.baseDir(), slidePath), (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    return true;
  },

  isExistingDir: function(_path) {
    const slidePath = (_path) ? _path : '';

    try {
      return fs.statSync(path.join(FileUtils.baseDir(), slidePath)).isDirectory();
    } catch (e) {
      return false;
    }
  },

  homeDir: function() {
    if (process.env.NODE_ENV === 'test') return os.tmpdir();

    return process.env.HOME || process.env.USERPROFILE;
  },

  baseDir: function() {
    return path.join(FileUtils.homeDir(), '.zatpr');
  }
};

module.exports = FileUtils;
