const fs   = require('fs-extra');
const path = require('path');
const os   = require('os');

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
    } catch (e) {
      return false;
    }
  },

  slideDirectories: () => {
    const elements = fs.readdirSync(FileUtils.baseDir());
    return elements.filter((element) => {
      if (fs.statSync(path.join(FileUtils.baseDir(), element)).isDirectory()) return element;
    });
  },

  homeDir: () => {
    if (process.env.NODE_ENV === 'test') return os.tmpdir();

    return process.env.HOME || process.env.USERPROFILE;
  },

  baseDir: () => {
    return path.join(FileUtils.homeDir(), '.zatpr');
  }
};

module.exports = FileUtils;
