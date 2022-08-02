var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var normalOrderCharacter = "↑";
var oppositeOrderCharacter = "↓";

var GameReverseFilter = function (_React$Component) {
    _inherits(GameReverseFilter, _React$Component);

    function GameReverseFilter(props) {
        _classCallCheck(this, GameReverseFilter);

        var _this = _possibleConstructorReturn(this, (GameReverseFilter.__proto__ || Object.getPrototypeOf(GameReverseFilter)).call(this, props));

        _this.state = {
            boolReverse: false
        };
        _this.setGameReverseFilterReference(_this);
        return _this;
    }

    _createClass(GameReverseFilter, [{
        key: "setGameReverseFilterReference",
        value: function setGameReverseFilterReference(classRef) {
            var menu = this.props.gameMenuFilterRef;
            menu.gameReverseFilterRef = classRef;
        }
    }, {
        key: "resetBoolReverse",
        value: function resetBoolReverse() {
            var boolValue = false;
            this.setState(function () {
                return { boolReverse: boolValue };
            });
        }
    }, {
        key: "setBoolReverse",
        value: function setBoolReverse(boolValue) {
            this.setState(function () {
                return { boolReverse: boolValue };
            });
        }
    }, {
        key: "getBoolReverse",
        value: function getBoolReverse() {
            return this.state.boolReverse;
        }
    }, {
        key: "reverseRevertText",
        value: function reverseRevertText() {
            this.setBoolReverse(!this.getBoolReverse());
        }
    }, {
        key: "getRevertText",
        value: function getRevertText() {
            return this.getBoolReverse() ? oppositeOrderCharacter : normalOrderCharacter;
        }
    }, {
        key: "onGameReverseClick",
        value: function onGameReverseClick() {
            this.props.gameMenuFilterRef.revertFilter();
            this.reverseRevertText();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "button",
                { "class": "revert_filter", onClick: function onClick() {
                        return _this2.onGameReverseClick();
                    } },
                this.getRevertText()
            ); //<button class="revert_filter" onClick={() => this.revertFilter()}>{this.getRevertText()}</button>
        }
    }]);

    return GameReverseFilter;
}(React.Component);

export default GameReverseFilter;