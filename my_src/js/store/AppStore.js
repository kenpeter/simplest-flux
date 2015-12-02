var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var EventEmitter = require("events").EventEmitter;
var Assign = require("object-assign");
var CHANGE_EVENT = 'change';

var AppStore = Assign({}, EventEmitter.prototype, {
  // emit change, that is what event for
  emitChange: function() {
    // Similar to this.dispatch(dispatcherPack);
    this.emit(CHANGE_EVENT);
  }
});

/* Not working here, should it be registered in AppDispatch.js?
AppDispatcher.register(function(dispatcherPack){
  //test
  debugger;

  console.log(dispatcherPack);
  // I need to return true here, why?
  return true;
});
*/

module.exports = AppStore;
