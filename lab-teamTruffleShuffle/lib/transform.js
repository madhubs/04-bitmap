'use strict';

const transform = module.exports = {};

transform.invert = (data, callback) => {
  // modify all channels to invert colors
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    data.pixelArray[i] = 255 - data.pixelArray[i];
    data.pixelArray[i + 1] = 255 - data.pixelArray[i + 1];
    data.pixelArray[i + 2] = 255 - data.pixelArray[i + 2];
  }
  return callback(null, data);
};

transform.grayscale = (data, callback) => {
  // averages all channels for a grayscale shift in color
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    var grayscale = (data.pixelArray[i] + data.pixelArray[i + 1] + data.pixelArray[i + 2]) / 3;
    data.pixelArray[i] = grayscale;
    data.pixelArray[i + 1] = grayscale;
    data.pixelArray[i + 2] = grayscale;
  }
  return callback(null, data);
};

transform.red = (data, callback) => {
  // modify the blue channel for a red shift in color
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    var redshift = clamp(1.2 * (data.pixelArray[i] + data.pixelArray[i + 1] + data.pixelArray[i + 2]));
    data.pixelArray[i + 2] = redshift;
  }
  return callback(null, data);
};

transform.green = (data, callback) => {
  // modify the green channel for a green shift in color
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    var greenshift = clamp(1.2 * (data.pixelArray[i] + data.pixelArray[i + 1] + data.pixelArray[i + 2]));
    data.pixelArray[i + 1] = greenshift;
  }
  return callback(null, data);
};

transform.blue = (data, callback) => {
  // modify the red channel for a blue shift in color
  for (var i = 0; i < data.pixelArray.length; i+=4) {
    var blueshift = clamp(1.2 * (data.pixelArray[i] + data.pixelArray[i + 1] + data.pixelArray[i + 2]));
    data.pixelArray[i] = blueshift;
  }
  return callback(null, data);
};

transform.blackout = (data, callback) => {
  // change all channels to black
  for (var i = 0; i < data.pixelArray.length; i++) {
    data.pixelArray[i] = 0;
  }
  return callback(null, data);
};

function clamp(num) {
  // limits the input number to 255
  return num <= 0 ? 0 : num >= 255 ? 255 : num;
}
