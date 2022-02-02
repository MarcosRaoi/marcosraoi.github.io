var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TITLE_MY_GAMES_PAGE = "MEUS JOGOS"; // Meus jogos
var TITLE_BLOG_PAGE = "BLOG (DEVLOGS)"; // BLOG (devlogs)
var TITLE_CONTACT_PAGE = "CONTATO / REDES SOCIAIS"; // Contato / Redes Sociais
var TITLE_ABOUT_ME_PAGE = "SOBRE MIM"; // Sobre mim

var MenuNavigation = function (_React$Component) {
    _inherits(MenuNavigation, _React$Component);

    function MenuNavigation(props) {
        _classCallCheck(this, MenuNavigation);

        return _possibleConstructorReturn(this, (MenuNavigation.__proto__ || Object.getPrototypeOf(MenuNavigation)).call(this, props));
    }

    _createClass(MenuNavigation, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "a",
                    { href: "index.html" },
                    React.createElement("div", { id: "home", "class": "menu" })
                ),
                React.createElement(
                    "a",
                    { href: "jogos.html" },
                    React.createElement(
                        "div",
                        { id: "jogos", "class": "menu" },
                        TITLE_MY_GAMES_PAGE
                    )
                ),
                React.createElement(
                    "a",
                    { href: "https://marcosraoi.blogspot.com/", target: "_blank" },
                    React.createElement(
                        "div",
                        { id: "blog", "class": "menu" },
                        TITLE_BLOG_PAGE
                    )
                ),
                React.createElement(
                    "a",
                    { href: "contato.html" },
                    React.createElement(
                        "div",
                        { id: "contato", "class": "menu" },
                        TITLE_CONTACT_PAGE
                    )
                ),
                React.createElement(
                    "a",
                    { href: "sobre_mim.html" },
                    React.createElement(
                        "div",
                        { id: "sobre_mim", "class": "menu" },
                        TITLE_ABOUT_ME_PAGE
                    )
                )
            );
        }
    }]);

    return MenuNavigation;
}(React.Component);

export default MenuNavigation;