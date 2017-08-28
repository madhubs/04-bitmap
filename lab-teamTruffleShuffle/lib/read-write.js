// 'use strict';
//
// const fs = require('fs');
// const Bitmap = require('./bitmap');
//
// const readWrite = module.exports = {};
//
// readWrite.readFiles = (fileName, done) => {
//   //console.log(fileName);
//   fs.readFile(fileName, (err, data) => {
//     if (err) {
//       return done(err);
//     } else {
//       let bmp = new Bitmap(data);
//       //console.log('this one: ', bmp);
//       return done(bmp);
//     }
//   });
// };
//
// readWrite.writeFiles = (fileName, fileData, done) => {
//   fs.writeFile(fileName, fileData, (err) => {
//     if (err) {
//       return done(err);
//     } else {
//       return console.log('New bitmap file created.');
//     }
//   });
// };
