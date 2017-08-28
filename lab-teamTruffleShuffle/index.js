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
    var grayscale = (data.pixelArray[i] + data.pixelArray[i + 1] + data.pixelArray[i + 2]) / 3;
    data.pixelArray[i] = grayscale;
    data.pixelArray[i + 1] = grayscale;
    data.pixelArray[i + 2] = grayscale;
  }
  return callback(null, data);
};

transform.red = (data, callback) => {
  // do something to pixel array to red shift colors
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    var redshift = clamp(1.2 * (data.pixelArray[i] + data.pixelArray[i + 1] + data.pixelArray[i + 2]));
    data.pixelArray[i + 2] = redshift;
  }
  return callback(null, data);
};

transform.green = (data, callback) => {
  // do something to pixel array to green shift colors
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    var greenshift = clamp(1.2 * (data.pixelArray[i] + data.pixelArray[i + 1] + data.pixelArray[i + 2]));
    data.pixelArray[i + 1] = greenshift;
  }
  return callback(null, data);
};

transform.blue = (data, callback) => {
  // do something to pixel array to blue shift colors
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    var blueshift = clamp(1.2 * (data.pixelArray[i] + data.pixelArray[i + 1] + data.pixelArray[i + 2]));
    data.pixelArray[i] = blueshift;
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

function clamp(num) {
  return num <= 0 ? 0 : num >= 255 ? 255 : num;
}
