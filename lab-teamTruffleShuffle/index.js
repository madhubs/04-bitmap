'use strict';

const fs = require('fs');
const readWrite = {};
const transform = {};
// const bitmap = require('./lib/bitmap');
// const transform = require('./lib/transform');
// const readWrite = require('./lib/read-write');

var fileName = `${__dirname}/./assets/bitmap.bmp`;

function Bitmap(buffer) {
  this.allData = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readInt32LE(2);
  this.offset = buffer.readInt32LE(10);
  this.width = buffer.readInt32LE(18);
  this.height = buffer.readInt32LE(22);
  this.pixelArray = buffer.slice(54, this.offset);
}


// FROM READ-WRITE.JS FILE*******************************

readWrite.readFiles = (fileName, callback) => {
  //console.log(fileName);
  fs.readFile(fileName, (err, data) => {
    if (err) {
      return callback(err);
    } else {
      let bmp = new Bitmap(data);
      //console.log('this one: ', bmp.pixelArray);
      return callback(null, bmp);
    }
  });
};

readWrite.writeFiles = (fileName, fileData) => {
  //console.log(fileData);
  fs.writeFile(fileName, fileData, (err) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(fileData);
      return console.log('New bitmap file created.');
    }
  });
};
//*****************************************************************

//newBitmapInverted(fileName);
newBitmapGrayScale(fileName);
//newBitmapBlackOut(fileName);
//newBitmapRed(fileName);
//newBitmapBlue(fileName);
//newBitmapGreen(fileName);

// readWrite.readFiles((fileName), (err, data) => {
//   console.log(data);
// });

function newBitmapInverted(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    //console.log(data);
    if (err) {
      return console.error(err);
    } else {
      //console.log(data);
      transform.invert(data, (err, result) => {
        //console.log(data);
        if (err) {
          return console.error(err);
        } else {
          //console.log(fileName);
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_inverted.bmp';
          //console.log('hello',data);
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}

function newBitmapGrayScale(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    //console.log(data);
    if (err) {
      return console.error(err);
    } else {
      //console.log(data);
      transform.grayscale(data, (err, result) => {
        //console.log(data);
        if (err) {
          return console.error(err);
        } else {
          //console.log(fileName);
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_grayscaled.bmp';
          //console.log('hello',data);
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}

function newBitmapBlackOut(fileName, callback) {
  readWrite.readFiles((fileName), (err, data) => {
    //console.log(data);
    if (err) {
      return console.error(err);
    } else {
      //console.log(data);
      transform.blackout(data, (err, result) => {
        //console.log(data);
        if (err) {
          return console.error(err);
        } else {
          //console.log(fileName);
          var res = fileName.split('.bmp');
          var newfileName = res[0] + '_blackout.bmp';
          //console.log('hello',data);
          readWrite.writeFiles(newfileName, data.allData);
        }
      });
    }
  });
}


// FROM TRANSFORM.JS FILE************************************
transform.invert = (data, callback) => {
  // do something to pixel array to invert colors
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    data.pixelArray[i] = 255 - data.pixelArray[i];
    data.pixelArray[i + 1] = 255 - data.pixelArray[i + 1];
    data.pixelArray[i + 2] = 255 - data.pixelArray[i + 2];
  }
  return callback(null, data);
};

transform.grayscale = (data, callback) => {
  // do something to pixel array to grayscale colors
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    data.pixelArray[i] = 255 - data.pixelArray[i];
    data.pixelArray[i + 1] = 255 - data.pixelArray[i + 1];
    data.pixelArray[i + 2] = 255 - data.pixelArray[i + 2];
  }
  return callback(null, data);
};

transform.blackout = (data, callback) => {
  // do something to pixel array to blackout the colors
  for (var i = 0; i < data.pixelArray.length; i++) {
    data.pixelArray[i] = 0;
  }
  return callback(null, data);
};


//**********************************************************
