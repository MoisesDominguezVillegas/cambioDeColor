"use strict";

var randomColor = function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var divTest = "<div id=\"test\" style=\"background-color:rgb(".concat(r, ",").concat(g, ",").concat(b, ")\"></div>");
  return divTest;
};

document.body.innerHTML = randomColor();