exports.setColorImpl = function(element, color) {
  element.style.color = color;
};

exports.setFontSizeImpl = function(element, fontSize) {
  element.style.fontSize = fontSize;
};

exports.assertImpl = function(bool, msg) {
  console.assert(bool, msg);
};

exports.toHTMLElement = function(e) {
  return e;
};

exports.logClearImpl = function() {
  console.clear();
};

exports.logDirImpl = function(a) {
  console.dir(a);
};

exports.groupImpl = function(s) {
  console.group(s);
};

exports.groupEndImpl = function (s) {
  console.groupEnd(s);
};

exports.logCountImpl = function(s) {
  console.count(s);
};
