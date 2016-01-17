const fs   = require('fs-extra');
const path = require('path');
const os   = require('os');
const _    = require('lodash');

const FileUtils = {
  createBaseDir: () => {
    fs.mkdirp(path.join(FileUtils.baseDir()), (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    return true;
  },

  createSlideDir: (dirPath) => {
    const slideDirPath = (dirPath) ? dirPath : '';

    fs.mkdirp(path.join(FileUtils.baseDir(), slideDirPath), (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    return true;
  },

  isExistingDir: (dirPath) => {
    const slideDirPath = (dirPath) ? dirPath : '';

    try {
      return fs.statSync(path.join(FileUtils.baseDir(), slideDirPath)).isDirectory();
    } catch (err) {
      return false;
    }
  },

  slideDirectories: () => {
    const directories = fs.readdirSync(FileUtils.baseDir()).filter((item) => {
      if (fs.statSync(FileUtils.slideDir(item)).isDirectory()) return item;
    });

    return _.sortByOrder(directories, (dir) => {
      return fs.statSync(FileUtils.slideDir(dir)).birthtime.toLocaleString();
    }, 'desc');
  },

  homeDir: () => {
    if (process.env.NODE_ENV === 'test') return os.tmpdir();

    return process.env.HOME || process.env.USERPROFILE;
  },

  baseDir: () => {
    return path.join(FileUtils.homeDir(), '.zatpr');
  },

  slideDir: (dirname) => {
    return path.join(FileUtils.baseDir(), dirname);
  }
};

module.exports = FileUtils;
