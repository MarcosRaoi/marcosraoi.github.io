function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoJogo = function (_React$Component) {
    _inherits(InfoJogo, _React$Component);

    function InfoJogo(props) {
        _classCallCheck(this, InfoJogo);

        return _possibleConstructorReturn(this, (InfoJogo.__proto__ || Object.getPrototypeOf(InfoJogo)).call(this, props));
    }

    return InfoJogo;
}(React.Component);

InfoJogo = function InfoJogo(props) {
    var my_info = props.info;

    return React.createElement("div", { dangerouslySetInnerHTML: { __html: my_info } });
};