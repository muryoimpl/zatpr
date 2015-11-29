import fs from 'fs-extra';
import path from 'path';

export const HOMEDIR = process.env.HOME || process.env.USERPROFILE;
export const BASEDIR = path.join(HOMEDIR, '.zatpr');

export default class FileUtils {
  static createBaseDir() {
    fs.mkdirp(BASEDIR, (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    return true;
  }
}
