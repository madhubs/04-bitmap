'use strict';

const fs = require('fs');
const transform = require('./transform');
const readWrite = require('./read-write');

const bitmap = module.exports = {};

function Bitmap(buffer) {
  this.allData = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readInt32LE(2);
  this.offset = buffer.readInt32LE(10);
  this.width = buffer.readInt32LE(18);
  this.height = buffer.readInt32LE(22);
  this.pixelArray = buffer.slice(54, this.offset);
}

function newBmp(dataObj) {
  let bmp = new Bitmap(dataObj);
  return bmp;
}

bitmap.newBitmapInverted = (fileName, callback) => {
  readWrite.readFilesAsync(fileName).then(newBmp(data))
    .then(transform.invert(bmp.pixelArray))
    .then(readWrite.writeFilesAsync(fileName + 'inverted', bmp.pixelArray))
    .catch(function(err) {
      console.error(err);
    });
}

bitmap.newBitmapGrayScale = function() {
  let bmp = new Bitmap(readWrite.readFilesAsync(fileName));
}

bitmap.newBitmapBlackOut = function() {
  let bmp = new Bitmap(readWrite.readFilesAsync(fileName));
}
