var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TITLE_MY_GAMES_PAGE = "MEUS JOGOS"; // Meus jogos
var TITLE_BLOG_PAGE = "BLOG (DEVLOGS)"; // BLOG (devlogs)
var TITLE_CONTACT_PAGE = "CONTATO / REDES SOCIAIS"; // Contato / Redes Sociais
var TITLE_ABOUT_ME_PAGE = "SOBRE MIM"; // Sobre mim

var PAGE_INDEX = "/"; // index.html
var PAGE_GAMES = "jogos"; // jogos.html
var PAGE_CONTACT = "contato"; // contato.html
var PAGE_ABOUT = "sobre_mim"; // sobre_mim.html
var PAGE_BLOG = "https://marcosraoi.blogspot.com/"; // https://marcosraoi.blogspot.com/

var CLASS_MENU = "menu";

var PAGE_ID_INDEX = "home"; // index.html
var PAGE_ID_GAMES = "jogos"; // jogos.html
var PAGE_ID_CONTACT = "contato"; // contato.html
var PAGE_ID_ABOUT = "sobre_mim"; // sobre_mim.html
var PAGE_ID_BLOG = "blog"; // https://marcosraoi.blogspot.com/

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
                    { href: PAGE_INDEX },
                    React.createElement("div", { id: PAGE_ID_INDEX, "class": CLASS_MENU })
                ),
                React.createElement(
                    "a",
                    { href: PAGE_GAMES },
                    React.createElement(
                        "div",
                        { id: PAGE_ID_GAMES, "class": CLASS_MENU },
                        TITLE_MY_GAMES_PAGE
                    )
                ),
                React.createElement(
                    "a",
                    { href: PAGE_BLOG, target: "_blank" },
                    React.createElement(
                        "div",
                        { id: PAGE_ID_BLOG, "class": CLASS_MENU },
                        TITLE_BLOG_PAGE
                    )
                ),
                React.createElement(
                    "a",
                    { href: PAGE_CONTACT },
                    React.createElement(
                        "div",
                        { id: PAGE_ID_CONTACT, "class": CLASS_MENU },
                        TITLE_CONTACT_PAGE
                    )
                ),
                React.createElement(
                    "a",
                    { href: PAGE_ABOUT },
                    React.createElement(
                        "div",
                        { id: PAGE_ID_ABOUT, "class": CLASS_MENU },
                        TITLE_ABOUT_ME_PAGE
                    )
                )
            );
        }
    }]);

    return MenuNavigation;
}(React.Component);

export default MenuNavigation;