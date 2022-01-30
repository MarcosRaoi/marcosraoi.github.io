var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GameCell from "./GameCell.js";

var cells_received = [];

var GamesPage = function (_React$Component) {
    _inherits(GamesPage, _React$Component);

    function GamesPage(props) {
        _classCallCheck(this, GamesPage);

        var _this = _possibleConstructorReturn(this, (GamesPage.__proto__ || Object.getPrototypeOf(GamesPage)).call(this, props));

        cells_received = props.children.cells;
        return _this;
    }

    _createClass(GamesPage, [{
        key: "createCelulas",
        value: function createCelulas() {
            var index = 0;
            var pageWithCells = [];
            cells_received.forEach(function () {
                var eachCell = cells_received[index];
                pageWithCells.push(React.createElement(
                    GameCell,
                    { cell: eachCell },
                    index
                ));
                index++;
            });

            return pageWithCells;
        }
    }, {
        key: "render",
        value: function render() {
            var page = this.createCelulas();
            return page;
        }
    }]);

    return GamesPage;
}(React.Component);

export default GamesPage;