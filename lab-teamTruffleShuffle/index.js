'use strict';

//const fs = require('fs');
const readWrite = require('./lib/read-write');
const transform = require('./lib/transform');

var fileName = `${__dirname}/./assets/bitmap.bmp`;

newBitmapInverted(fileName);
newBitmapGrayScale(fileName);
newBitmapBlackOut(fileName);
newBitmapRed(fileName);
newBitmapBlue(fileName);
newBitmapGreen(fileName);

function newBitmapInverted(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    if (err) {
      return console.error(err);
    } else {
      transform.invert(data, (err, result) => {
        if (err) {
          return console.error(err);
        } else {
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_inverted.bmp';
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}

function newBitmapGrayScale(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    if (err) {
      return console.error(err);
    } else {
      transform.grayscale(data, (err, result) => {
        if (err) {
          return console.error(err);
        } else {
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_grayscaled.bmp';
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}

function newBitmapBlackOut(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    if (err) {
      return console.error(err);
    } else {
      transform.blackout(data, (err, result) => {
        if (err) {
          return console.error(err);
        } else {
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_blackout.bmp';
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}

function newBitmapRed(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    if (err) {
      return console.error(err);
    } else {
      transform.red(data, (err, result) => {
        if (err) {
          return console.error(err);
        } else {
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_red.bmp';
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}

function newBitmapGreen(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    if (err) {
      return console.error(err);
    } else {
      transform.green(data, (err, result) => {
        if (err) {
          return console.error(err);
        } else {
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_green.bmp';
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}

function newBitmapBlue(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    if (err) {
      return console.error(err);
    } else {
      transform.blue(data, (err, result) => {
        if (err) {
          return console.error(err);
        } else {
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_blue.bmp';
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}
