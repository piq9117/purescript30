var isNil = function (a) {
  return a === undefined || a === null;
};
exports.dataset = function (eventTarget) {
  return eventTarget.dataset;
};

exports.sizing = function (dataset) {
  return isNil(dataset.sizing)
    ? ""
    : dataset.sizing;
};

exports.name = function (eventTarget) {
  return eventTarget.name;
};

exports.setPropertyImpl = function (el, props, value) {
  el.style.setProperty(props, value);
};

exports.value = function (eventTarget) {
  return eventTarget.value;
}
