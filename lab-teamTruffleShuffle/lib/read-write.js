'use strict';


const Bitmap = require('./bitmap');
const fs = require('fs');

const readWrite = module.exports = {};

readWrite.readFiles = (filepath, callback) => {
  fs.readFile(`${__dirname}/../assets/bitmap.bmp`, (err, data) => {
    if(err) console.error(err);

    let bmp = new Bitmap(data);

    console.log(bmp);
  });
};

readWrite.writeFiles = (filepath, callback) => {
  fs.writeFile(`${__dirname}/../assets/black-out-bitmap.bmp`, (err, data) => {
    if(err) console.error(err);

    let bmp = new Bitmap(data);

    console.log(bmp);
  });
};


readWrite.readFiles();

//recusive function??
