var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { SOCIAL_NETWORKS } from "./ContactPage.js";
import ContactImage from "./ContactImage.js";
import ContactText from "./ContactText.js";

var ContactSocialNetwork = function (_React$Component) {
    _inherits(ContactSocialNetwork, _React$Component);

    function ContactSocialNetwork(props) {
        _classCallCheck(this, ContactSocialNetwork);

        return _possibleConstructorReturn(this, (ContactSocialNetwork.__proto__ || Object.getPrototypeOf(ContactSocialNetwork)).call(this, props));
    }

    _createClass(ContactSocialNetwork, [{
        key: "getSocialNetworkLink",
        value: function getSocialNetworkLink(keyId) {
            switch (keyId) {
                case SOCIAL_NETWORKS.Facebook:
                    return "https://www.facebook.com/markinhos.cf";

                case SOCIAL_NETWORKS.Instagram:
                    return "https://www.instagram.com/marcosraoi/";

                case SOCIAL_NETWORKS.Linkedin:
                    return "https://www.linkedin.com/in/marcos-cavalcante-de-freitas-8bb55a120/";

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
                { "class": "redes_sociais" },
                React.createElement(
                    "a",
                    { href: this.getSocialNetworkLink(key), target: "_blank" },
                    React.createElement(ContactImage, { id: key }),
                    React.createElement(ContactText, { id: key })
                )
            );
        }
    }]);

    return ContactSocialNetwork;
}(React.Component);

export default ContactSocialNetwork;