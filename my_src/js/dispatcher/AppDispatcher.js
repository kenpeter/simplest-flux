var Dispatcher = require("flux").Dispatcher;
var Assign = require("object-assign");

var AppDispatcher = Assign(new Dispatcher(), {
  handleViewAction: function(appAction) {
    this.dispatch({
      source: "VIEW_ACTION",
      action: appAction      
    });
  }
});

// Now working
token = AppDispatcher.register(function (payload) {
  console.log(payload);
  return true;
});

module.exports = AppDispatcher; // We use it directly.
