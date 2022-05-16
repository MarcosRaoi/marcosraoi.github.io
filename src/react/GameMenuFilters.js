var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GameFilter from "./GameFilter.js";
import GameResetFilter from "./GameResetFilter.js";
import GameReverseFilter from "./GameReverseFilter.js";

var GameMenuFilters = function (_React$Component) {
    _inherits(GameMenuFilters, _React$Component);

    function GameMenuFilters(props) {
        _classCallCheck(this, GameMenuFilters);

        var _this = _possibleConstructorReturn(this, (GameMenuFilters.__proto__ || Object.getPrototypeOf(GameMenuFilters)).call(this, props));

        _this.gamesPageRef = _this.props.gamesPageRef;
        return _this;
    }

    _createClass(GameMenuFilters, [{
        key: "updadeGamePage",
        value: function updadeGamePage(gamesPage, cellsOrder) {
            gamesPage.setCellsReceived(cellsOrder);
            gamesPage.updateCells(cellsOrder);
        }
    }, {
        key: "filterRelease",
        value: function filterRelease() {
            var gamePage = this.gamesPageRef;
            var cells = gamePage.getCells();

            cells.sort(function (a, b) {
                var aParsedReleaseData = parseInt(a.data["release"].replaceAll("/", ""));
                var bParsedReleaseData = parseInt(b.data["release"].replaceAll("/", ""));
                return bParsedReleaseData - aParsedReleaseData;
            });

            this.updadeGamePage(gamePage, cells);
        }
    }, {
        key: "filterAlphabetical",
        value: function filterAlphabetical() {
            var gamePage = this.gamesPageRef;
            var cells = gamePage.getCells();

            cells.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });

            this.updadeGamePage(gamePage, cells);
        }
    }, {
        key: "logProps",
        value: function logProps() {
            var dataProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var cells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            console.clear();
            cells.forEach(function (element) {
                console.log(dataProp, " >> ", element.data[dataProp]);
            });
        }
    }, {
        key: "filterData",
        value: function filterData() {
            var dataProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var isAlphabetical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (isAlphabetical) {
                this.filterAlphabetical();
            }

            var gamePage = this.gamesPageRef;
            var cells = gamePage.getCells();

            cells.sort(function (a, b) {
                if (a.data[dataProp] > b.data[dataProp]) {
                    return 1;
                }
                if (a.data[dataProp] < b.data[dataProp]) {
                    return -1;
                }
                return 0;
            });

            this.logProps(dataProp, cells);
            this.updadeGamePage(gamePage, cells);
        }

        //GameResetFilter.js

    }, {
        key: "resetFilter",
        value: function resetFilter() {
            var gamePage = this.gamesPageRef;
            var cells = gamePage.getCells();
            cells.sort(function (a, b) {
                return a.index - b.index;
            });
            this.updadeGamePage(gamePage, cells);
        }

        //GameReverseFilter.js

    }, {
        key: "revertFilter",
        value: function revertFilter() {
            var gamePage = this.gamesPageRef;
            var cells = gamePage.getCells();
            cells.reverse();
            this.updadeGamePage(gamePage, cells);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { "class": "game_filters" },
                React.createElement(
                    GameResetFilter,
                    { eu: this },
                    "ORDENAR POR:"
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterRelease();
                        } },
                    "LAN\xC7AMENTO"
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterAlphabetical();
                        } },
                    "A / Z"
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterData("language", true);
                        } },
                    "LINGUAGEM"
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterData("technology", true);
                        } },
                    "TECNOLOGIA"
                ),
                React.createElement(GameReverseFilter, { eu: this })
            );
        }
    }]);

    return GameMenuFilters;
}(React.Component);

export default GameMenuFilters;