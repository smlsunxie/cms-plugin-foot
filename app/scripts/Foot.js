var Foot;

Foot = React.createClass({
  render: function() {
    return React.createElement(React.DOM.div, {
      "id": "footer"
    }, React.createElement(React.DOM.div, {
      "className": "container"
    }, React.createElement(React.DOM.p, {
      "className": "muted credit"
    }, "Example by ", React.createElement(React.DOM.a, {
      "href": "http://blog.smlsun.com"
    }, "Spooky Xie"))));
  }
});

window.modules["foot"] = Foot;

module.exports = Foot;
