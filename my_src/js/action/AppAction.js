var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var AppConstant = require("../constant/AppConstant.js");

var AppAction = {

  addItem: function(item) {
    //test
    //debugger;

    // actionType
    // item
    var actionPack = {
      actionType: AppConstant.ADD_ITEM,
      item: item
    }

    AppDispatcher.handleViewAction(actionPack);
  }
}

module.exports = AppAction; // Flux uses it, we don't use it directly.
