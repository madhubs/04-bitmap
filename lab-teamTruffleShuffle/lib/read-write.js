'use strict';

const readWrite = module.exports = {};
const fs = require('fs');
const Bitmap = require('./lib/bitmap');


//readWrite.readFiles = (filepath, callback) => {
  fs.readFile(`${__dirname}/assets/bitmap.bmp`, (err, data) => {
    if(err) console.error(err);

    let bmp = new Bitmap(data);
    console.log(bmp);
  });
//};

//readWrite.readFiles();

//recusive function??
