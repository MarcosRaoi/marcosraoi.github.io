var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import ContactSocialNetwork from "./ContactSocialNetwork.js";

export var SOCIAL_NETWORKS = {
    Instagram: "instagram",
    Facebook: "facebook",
    Linkedin: "linkedin",
    GitHub: "github"
};

var ContactPage = function (_React$Component) {
    _inherits(ContactPage, _React$Component);

    function ContactPage(props) {
        _classCallCheck(this, ContactPage);

        return _possibleConstructorReturn(this, (ContactPage.__proto__ || Object.getPrototypeOf(ContactPage)).call(this, props));
    }

    _createClass(ContactPage, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "page_contato", "class": "page" },
                React.createElement(ContactSocialNetwork, { id: SOCIAL_NETWORKS.Facebook }),
                React.createElement(ContactSocialNetwork, { id: SOCIAL_NETWORKS.Instagram }),
                React.createElement(ContactSocialNetwork, { id: SOCIAL_NETWORKS.Linkedin }),
                React.createElement(ContactSocialNetwork, { id: SOCIAL_NETWORKS.GitHub })
            );
        }
    }]);

    return ContactPage;
}(React.Component);

export default ContactPage;