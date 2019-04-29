"use strict";

exports.eqEventTargetImpl = function(evtTarget1) {
  return function(evtTarget2) {
    return evtTarget1 === evtTarget2;
  };
};
