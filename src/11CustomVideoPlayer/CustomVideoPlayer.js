exports.dataset = function(eventTarget) {
  return eventTarget.dataset;
};

exports.skipData = function (dataset) {
  return dataset.skip;
};

exports.targetValue = function (target) {
  return target.value;
};

exports.targetName = function (target) {
  return target.name;
};

exports.setVideoVolumeImpl = function (video, value) {
  video["volume"] = value;
};

exports.setVideoPlaybackImpl = function(video, value) {
  video["playbackRate"] = value;
};

exports.setFlexBasisImpl = function(element, flexBasis) {
  element.style.flexBasis = flexBasis;
};

exports.offsetX = function (eventTarget) {
  return eventTarget.offsetX;
};
