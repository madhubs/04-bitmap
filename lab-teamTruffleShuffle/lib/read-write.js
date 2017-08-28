'use strict';

const fs = require('fs');
const Bitmap = require('./bitmap');

const readWrite = module.exports = {};

readWrite.readFiles = (fileName, callback) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      return callback(err);
    } else {
      let bmp = new Bitmap(data);
      return callback(null, bmp);
    }
  });
};

readWrite.writeFiles = (fileName, fileData) => {
  fs.writeFile(fileName, fileData, (err) => {
    if (err) {
      return console.error(err);
    } else {
      return console.log('New bitmap file created.');
    }
  });
};
