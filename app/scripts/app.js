var Foot, React, mountNode;

window.modules = {};

React = window.React = require("react");

Foot = require("./Foot");

mountNode = document.getElementById("app");

React.renderComponent(React.createElement(Foot, null), mountNode);
