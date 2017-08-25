'use strict';

const fs = require('fs');
const Bitmap = require('./bitmap');

const readWrite = module.exports = {};

readWrite.readFiles = (fileName, done) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      return done(err);
    } else {
      let bmp = new Bitmap(data);
      return done(bmp);
    }
  });
};

readWrite.writeFiles = (fileName, fileData, done) => {
  fs.writeFile(fileName, fileData, (err) => {
    if (err) {
      return done(err);
    } else {
      return console.log('New bitmap file created.');
    }
  });
};


// readWrite.readFilesAsync = (fileName) => {
//   return new Promise((resolve,reject) => {
//     fs.readFile(fileName, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
//
// readWrite.writeFilesAsync = (fileName, fileData) => {
//   return new Promise((resolve,reject) => {
//     fs.writeFile(fileName, fileData, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(console.log('New file created'));
//       }
//     });
//   });
// };


//readWrite.readFiles();
