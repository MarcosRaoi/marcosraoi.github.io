var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GameCell from "./GameCell.js";
import GameFilter from "./GameFilter.js";

var GamesPage = function (_React$Component) {
    _inherits(GamesPage, _React$Component);

    function GamesPage(props) {
        _classCallCheck(this, GamesPage);

        var _this = _possibleConstructorReturn(this, (GamesPage.__proto__ || Object.getPrototypeOf(GamesPage)).call(this, props));

        _this.state = {
            cellsReceived: _this.props.children.cells,
            filterState: ""
        };
        _this.pageWithCells = [];
        return _this;
    }

    _createClass(GamesPage, [{
        key: "releaseFilterCells",
        value: function releaseFilterCells() {
            this.state.cellsReceived.sort(function (a, b) {
                var aValue = parseInt(a.data.release.replace("/", ""));
                var bValue = parseInt(b.data.release.replace("/", ""));
                return bValue - aValue;
            });

            this.createCells();
        }
    }, {
        key: "createCells",
        value: function createCells() {
            var _this2 = this;

            this.pageWithCells = [];

            var index = 0;

            this.state.cellsReceived.forEach(function () {
                var eachCell = _this2.state.cellsReceived[index];
                _this2.pageWithCells.push(React.createElement(
                    GameCell,
                    { cell: eachCell },
                    index
                ));
                index++;
            });
        }
    }, {
        key: "renderCells",
        value: function renderCells(str_filterMode) {
            this.pageWithCells = [];

            switch (str_filterMode) {
                case "release":
                    this.releaseFilterCells();
                    break;
                case "":
                default:
                    this.createCells();
                    break;
            }

            return this.pageWithCells;
        }
    }, {
        key: "filterCells",
        value: function filterCells(str_filterMode) {
            this.setState(function () {
                return { filterState: str_filterMode };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var page = this.renderCells(this.state.filterState);
            page.unshift(React.createElement(GameFilter, { filterFunc: function filterFunc(str) {
                    return _this3.filterCells(str);
                } }));
            return page;
        }
    }]);

    return GamesPage;
}(React.Component);

export default GamesPage;