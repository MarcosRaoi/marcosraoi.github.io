var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GameBanner from "./GameBanner.js";

var GameLinkedBanner = function (_React$Component) {
    _inherits(GameLinkedBanner, _React$Component);

    function GameLinkedBanner(_ref) {
        var bannerData = _ref.bannerData;

        _classCallCheck(this, GameLinkedBanner);

        var _this = _possibleConstructorReturn(this, (GameLinkedBanner.__proto__ || Object.getPrototypeOf(GameLinkedBanner)).call(this, { bannerData: bannerData }));

        _this.state = {
            data: bannerData
        };
        return _this;
    }

    _createClass(GameLinkedBanner, [{
        key: "getLinkTarget",
        value: function getLinkTarget(str_target) {
            return str_target ? str_target : "_self";
        }
    }, {
        key: "render",
        value: function render() {
            var myBannerData = this.state.data.cellData;
            var cellHref = myBannerData.link;
            var cellTarget = myBannerData.target;
            var cellId = myBannerData.key;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "a",
                    { href: cellHref, target: this.getLinkTarget(cellTarget) },
                    React.createElement(
                        GameBanner,
                        null,
                        cellId
                    )
                )
            );
        }
    }]);

    return GameLinkedBanner;
}(React.Component);

export default GameLinkedBanner;