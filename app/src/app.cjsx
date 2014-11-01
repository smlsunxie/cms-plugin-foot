window.modules = {}
React = window.React = require("react")
Foot = require("./Foot")
mountNode = document.getElementById("app")


React.renderComponent(<Foot />, mountNode);
