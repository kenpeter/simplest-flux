var React = require('react');
var AppAction = require('../action/AppAction.js'); // It needs to know what is on top his head.
//var AppStore = require('../store/AppStore.js'); // I don't think we need to know about store, because it is one direction.


var Component = React.createClass({
  handleClick: function() {

    //test
    //debugger;

    AppAction.addItem("Add an item!");
  },

  render: function() {
    return (
      <div className="wrap">
        <h3 onClick={this.handleClick}>Please click this</h3>
      </div> 
    );
  }
});


module.exports = Component;
