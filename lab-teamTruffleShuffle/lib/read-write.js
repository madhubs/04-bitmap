'use strict';


//const Bitmap = require('./bitmap');
const fs = require('fs');

const readWrite = module.exports = {};

readWrite.readFilesAsync = (fileName) => {
  return new Promise((resolve,reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readWrite.writeFilesAsync = (fileName, fileData) => {
  return new Promise((resolve,reject) => {
    fs.writeFile(fileName, fileData, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(console.log('New file created'));
      }
    });
  });
};


//readWrite.readFiles();
