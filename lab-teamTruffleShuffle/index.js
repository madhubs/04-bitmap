'use strict';

// const bitmap = require('../lib/bitmap');
const transform = require('../lib/transform.js');
const readWrite = require('./read-write');

var fileName = `${__dirname}/../assets/bitmap.bmp`;

newBitmapInverted(fileName);
newBitmapGrayScale(fileName);
newBitmapBlackOut(fileName);


function newBitmapInverted(fileName, done) {
  readWrite.readFiles(fileName, (err, data) => {
    if (err) {
      return done(err);
    } else {
      transform.invert(data.pixelArray, (err, data) => {
        if (err) {
          return done(err);
        } else {
          readWrite.writeFiles(fileName + '_inverted', data.pixelArray);
        }
      });
    }
  });
}

function newBitmapGrayScale(fileName, done) {
  readWrite.readFiles(fileName, (err, data) => {
    if (err) {
      return done(err);
    } else {
      transform.grayscale(data.pixelArray, (err, data) => {
        if (err) {
          return done(err);
        } else {
          readWrite.writeFiles(fileName + '_grayscaled', data.pixelArray);
        }
      });
    }
  });
}

function newBitmapBlackOut(fileName, done) {
  readWrite.readFiles(fileName, (err, data) => {
    if (err) {
      return done(err);
    } else {
      transform.blackout(data.pixelArray, (err, data) => {
        if (err) {
          return done(err);
        } else {
          readWrite.writeFiles(fileName + '_blackedout', data.pixelArray);
        }
      });
    }
  });
}


// bitmap.newBitmapInverted = (fileName) => {
//   readWrite.readFilesAsync(fileName).then(newBmp(data))
//     .then(transform.invert(bmp.pixelArray))
//     .then(readWrite.writeFilesAsync(fileName + '_inverted', bmp.pixelArray))
//     .catch(function(err) {
//       console.error(err);
//     });
// };
//
// bitmap.newBitmapGrayScale = function(fileName) {
//   readWrite.readFilesAsync(fileName).then(newBmp(data))
//     .then(transform.grayscale(bmp.pixelArray))
//     .then(readWrite.writeFilesAsync(fileName + '_grayscaled', bmp.pixelArray))
//     .catch(function(err) {
//       console.error(err);
//     });
// };
//
// bitmap.newBitmapBlackOut = function(fileName) {
//   readWrite.readFilesAsync(fileName).then(newBmp(data))
//     .then(transform.blackout(bmp.pixelArray))
//     .then(readWrite.writeFilesAsync(fileName + '_blackedout', bmp.pixelArray))
//     .catch(function(err) {
//       console.error(err);
//     });
// };
