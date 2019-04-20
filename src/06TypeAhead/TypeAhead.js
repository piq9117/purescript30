exports.value = function(eventTarget) {
  return eventTarget.value;
};

exports.innerHtmlImpl = function (element, html) {
  element.innerHTML = html;
};
