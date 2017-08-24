'use strict';

const fs = require('fs');
const transform = require('../lib/transform');
const readWrite = require('../lib/read-write');

module.exports = function(buffer){
  this.allData = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readInt32LE(2);
  this.offset = buffer.readInt32LE(10);
  this.width = buffer.readInt32L(22);
  this.pixelArray = buffer.slice(54, this.offset);
};
