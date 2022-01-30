function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameInfo = function (_React$Component) {
    _inherits(GameInfo, _React$Component);

    function GameInfo(props) {
        _classCallCheck(this, GameInfo);

        return _possibleConstructorReturn(this, (GameInfo.__proto__ || Object.getPrototypeOf(GameInfo)).call(this, props));
    }

    return GameInfo;
}(React.Component);

GameInfo = function GameInfo(props) {
    var myInfo = props.children;

    return React.createElement(
        "div",
        { "class": "info" },
        React.createElement("div", { dangerouslySetInnerHTML: { __html: myInfo } })
    );
};

export default GameInfo;