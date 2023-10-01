var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GameFilter from "./GameFilter.js";
import GameResetFilter from "./GameResetFilter.js";
import GameReverseFilter from "./GameReverseFilter.js";

var FILTERS = {
    "DEFAULT": 0,
    "RELEASE": 1,
    "ALPHABETICAL": 2,
    "LANGUAGE": 3,
    "TECHNOLOGY": 4,
    "PLATFORM": 5,
    "REVERT": -1
};

var resetFilterText = "ORDENAR POR:";
var filterTexts = ["LANÇAMENTO", "A / Z", "LINGUAGEM", "TECNOLOGIA", "PLATAFORMA"];

var keyFilterRelease = "release";
var keyFilterLanguage = "language";
var keyFilterTechnology = "technology";
var keyFilterPlatform = "platform";

var GameMenuFilters = function (_React$Component) {
    _inherits(GameMenuFilters, _React$Component);

    function GameMenuFilters(props) {
        _classCallCheck(this, GameMenuFilters);

        var _this = _possibleConstructorReturn(this, (GameMenuFilters.__proto__ || Object.getPrototypeOf(GameMenuFilters)).call(this, props));

        _this.gamesPageRef = _this.props.gamesPageRef;
        _this.gameReverseFilterRef = undefined;
        _this.lastFilter;
        return _this;
    }

    _createClass(GameMenuFilters, [{
        key: "updadeGamePage",
        value: function updadeGamePage(gamesPage, cellsOrder) {
            this.gameReverseFilterRef.resetBoolReverse();
            gamesPage.setCellsReceived(cellsOrder);
            gamesPage.updateCells(cellsOrder);
        }
    }, {
        key: "baseFilter",
        value: function baseFilter(gamesPage, cellsOrder, lastFilter) {
            this.updadeGamePage(gamesPage, cellsOrder);
            this.lastFilter = lastFilter;

            this.gamesPageRef.setLastFilter(this.lastFilter);
        }
    }, {
        key: "baseLog",
        value: function baseLog() {
            console.clear();
        }
    }, {
        key: "logRelease",
        value: function logRelease(cells) {
            this.baseLog();

            console.log("Release Order");
            console.log("");

            var releaseOrderIndex = 1;
            cells.forEach(function (element) {
                console.log(releaseOrderIndex + "º - ", element.data.release, "was the release date for", element.name);
                releaseOrderIndex++;
            });
        }
    }, {
        key: "filterRelease",
        value: function filterRelease() {
            var gamePage = this.gamesPageRef;
            var cells = gamePage.getCells();

            cells.sort(function (a, b) {
                var aParsedReleaseData = parseInt(a.data[keyFilterRelease].replaceAll("/", ""));
                var bParsedReleaseData = parseInt(b.data[keyFilterRelease].replaceAll("/", ""));
                return bParsedReleaseData - aParsedReleaseData;
            });
            this.logRelease(cells);

            this.baseFilter(gamePage, cells, FILTERS.RELEASE);
        }
    }, {
        key: "logAlphabetical",
        value: function logAlphabetical(cells) {
            this.baseLog();

            console.log("Alphabetical Order");
            console.log("");

            var alphabeticalOrderIndex = 1;
            cells.forEach(function (element) {
                console.log(alphabeticalOrderIndex + "º", element.name);
                alphabeticalOrderIndex++;
            });
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
            this.logAlphabetical(cells);

            this.baseFilter(gamePage, cells, FILTERS.ALPHABETICAL);
        }
    }, {
        key: "logProps",
        value: function logProps() {
            var cells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var dataProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            this.baseLog();

            cells.forEach(function (element) {
                console.log(dataProp, " >> ", element.data[dataProp]);
            });
        }
    }, {
        key: "getFilterTypeData",
        value: function getFilterTypeData(dataProp) {
            return FILTERS[dataProp.toUpperCase()];
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

            this.logProps(cells, dataProp);

            this.baseFilter(gamePage, cells, this.getFilterTypeData(dataProp));
        }

        //GameResetFilter.js

    }, {
        key: "resetFilter",
        value: function resetFilter() {
            var gamePage = this.gamesPageRef;
            var cells = gamePage.getCells();

            this.baseLog();

            cells.sort(function (a, b) {
                return a.index - b.index;
            });

            this.baseFilter(gamePage, cells, FILTERS.DEFAULT);
        }

        //GameReverseFilter.js

    }, {
        key: "revertFilter",
        value: function revertFilter() {
            this.baseLog();

            var gamePage = this.gamesPageRef;
            var cells = gamePage.getCells();
            cells.reverse();

            this.baseFilter(gamePage, cells, FILTERS.REVERT);
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
                    { gameMenuFilterRef: this },
                    resetFilterText
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterRelease();
                        } },
                    "                          ",
                    filterTexts[0]
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterAlphabetical();
                        } },
                    "                     ",
                    filterTexts[1]
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterData(keyFilterLanguage, true);
                        } },
                    "      ",
                    filterTexts[2]
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterData(keyFilterTechnology, true);
                        } },
                    "    ",
                    filterTexts[3]
                ),
                React.createElement(
                    GameFilter,
                    { func: function func() {
                            return _this2.filterData(keyFilterPlatform, true);
                        } },
                    "      ",
                    filterTexts[4]
                ),
                React.createElement(GameReverseFilter, { gameMenuFilterRef: this })
            );
        }
    }]);

    return GameMenuFilters;
}(React.Component);

export default GameMenuFilters;