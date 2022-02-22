var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactImage = function (_React$Component) {
    _inherits(ContactImage, _React$Component);

    function ContactImage(props) {
        _classCallCheck(this, ContactImage);

        return _possibleConstructorReturn(this, (ContactImage.__proto__ || Object.getPrototypeOf(ContactImage)).call(this, props));
    }

    _createClass(ContactImage, [{
        key: "getStyleImage",
        value: function getStyleImage(keyId) {
            return { backgroundImage: "url(../img/redes_sociais/" + keyId + ".png)", backgroundSize: 'cover' };
        }
    }, {
        key: "render",
        value: function render() {
            var key = this.props.id;
            return React.createElement("div", { "class": "img_redes_sociais", id: key, style: this.getStyleImage(key) });
        }
    }]);

    return ContactImage;
}(React.Component);

export default ContactImage;