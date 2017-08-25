'use strict';

const transform = module.exports = {};

// or create a pixelArray function up here and then reference it in each transform

transform.invert = () => {
  //do something to pixel array to invert the colors
};

transform.grayscale = () => {
  // do something to pixel array to grayscale the colors
};

transform.blackout = () => {
  // do something to pixel array to blackout the colors
};
