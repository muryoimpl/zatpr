import fs from 'fs-extra';
import path from 'path';

export default class FileUtils {
  static createSlideDir(slidePath = '') {
    fs.mkdirp(path.join(FileUtils.baseDir(), slidePath), (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    return true;
  }

  static homeDir() {
    return process.env.HOME || process.env.USERPROFILE;
  }

  static baseDir() {
    return path.join(FileUtils.homeDir(), '.zatpr');
  }
}
