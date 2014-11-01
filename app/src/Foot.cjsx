
Foot = React.createClass(
  render: ->
    <div id="footer">
      <div className="container">
        <p className="muted credit">Example by <a href="http://blog.smlsun.com">Spooky Xie</a></p>
      </div>
    </div>
)


window.modules["foot"] = Foot
module.exports = Foot
