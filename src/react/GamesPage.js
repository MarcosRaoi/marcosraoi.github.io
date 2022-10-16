var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GameCell from "./GameCell.js";
import GameMenuFilters from "./GameMenuFilters.js";

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
        _this.orderCellsIndex();
        return _this;
    }

    _createClass(GamesPage, [{
        key: "updateCells",
        value: function updateCells(cellsOrder) {
            this.render(cellsOrder);
        }
    }, {
        key: "getCells",
        value: function getCells() {
            return this.state.cellsReceived;
        }

        // Called only once in the Constructor

    }, {
        key: "orderCellsIndex",
        value: function orderCellsIndex() {
            var cellsOrder = this.state.cellsReceived.sort(function (a, b) {
                return a.index - b.index;
            });
            this.createCells(cellsOrder);
        }
    }, {
        key: "createCells",
        value: function createCells() {
            var _this2 = this;

            var cellsOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.cellsReceived;

            this.pageWithCells = [];

            var cellIndex = 0;
            cellsOrder.forEach(function () {
                var eachCell = cellsOrder[cellIndex];
                _this2.pageWithCells.push(React.createElement(
                    GameCell,
                    { cell: eachCell },
                    cellIndex
                ));
                cellIndex++;
            });

            return this.pageWithCells;
        }
    }, {
        key: "setCellsReceived",
        value: function setCellsReceived(cells) {
            this.setState(function () {
                return { cellsReceived: cells };
            });
        }
    }, {
        key: "appendGameFilter",
        value: function appendGameFilter(page) {
            page.unshift(React.createElement(GameMenuFilters, { gamesPageRef: this }));
        }
    }, {
        key: "render",
        value: function render(cellsOrder) {
            var page = this.createCells(cellsOrder);
            this.appendGameFilter(page);
            return page;
        }
    }]);

    return GamesPage;
}(React.Component);

export default GamesPage;