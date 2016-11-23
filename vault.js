'use strict';
module.exports = function vault () {
    let safe = {};
    function setValue (key, value) {
      safe[key] = value;
      return safe;
    }
    function getValue (key) {
      if(safe.hasOwnProperty(key)){
        return safe[key];
      } else {
        return null;
      }
    }
    return {
      setValue: setValue,
      getValue: getValue
    };
};