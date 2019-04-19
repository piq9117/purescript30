exports.value = function(eventTarget) {
  return eventTarget.value;
};

exports.innerHtmlImpl = function (element, html) {
  console.log(element)
  element.innerHTML = html;
};
