var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { SOCIAL_NETWORKS } from "./ContactPage.js";

var ContactText = function (_React$Component) {
    _inherits(ContactText, _React$Component);

    function ContactText(props) {
        _classCallCheck(this, ContactText);

        return _possibleConstructorReturn(this, (ContactText.__proto__ || Object.getPrototypeOf(ContactText)).call(this, props));
    }

    _createClass(ContactText, [{
        key: "getSocialNetworkTexts",
        value: function getSocialNetworkTexts(keyId) {
            switch (keyId) {
                case SOCIAL_NETWORKS.Facebook:
                    return React.createElement(
                        "div",
                        null,
                        "https://www.facebook.com/markinhos.cf",
                        React.createElement("br", null),
                        "https://www.facebook.com/BlueLightningStudio"
                    );

                case SOCIAL_NETWORKS.Instagram:
                    return React.createElement(
                        "div",
                        null,
                        "https://www.instagram.com/marcosraoi/"
                    );

                case SOCIAL_NETWORKS.Linkedin:
                    return React.createElement(
                        "div",
                        null,
                        "https://www.linkedin.com/in/marcos-cavalcante-de-freitas-8bb55a120/"
                    );

                case SOCIAL_NETWORKS.GitHub:
                    return React.createElement(
                        "div",
                        null,
                        "https://www.github.com/MarcosRaoi/"
                    );

                default:
                    break;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var key = this.props.id;
            return React.createElement(
                "div",
                { "class": "txt_redes_sociais" },
                this.getSocialNetworkTexts(key)
            );
        }
    }]);

    return ContactText;
}(React.Component);

export default ContactText;