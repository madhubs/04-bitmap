'use strict';

const bitmap = require('../lib/bitmap');

var fileName = `${__dirname}/../assets/bitmap.bmp`

bitmap.newBitmapInverted(fileName);
bitmap.newBitmapGrayScale(fileName);
bitmap.newBitmapBlackOut(fileName);
