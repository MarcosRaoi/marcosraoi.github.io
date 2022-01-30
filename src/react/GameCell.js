var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { getDataLenght } from "../getJson.js";
import GameInfo from "./GameInfo.js";
import GameLinkedBanner from "./GameLinkedBanner.js";

var LAST_CELL_CLASS_NAME = "celula_de_jogo_ultima";
var NORMAL_CELL_CLASS_NAME = "celula_de_jogo";

var GameCell = function (_React$Component) {
    _inherits(GameCell, _React$Component);

    function GameCell(props) {
        _classCallCheck(this, GameCell);

        return _possibleConstructorReturn(this, (GameCell.__proto__ || Object.getPrototypeOf(GameCell)).call(this, props));
    }

    _createClass(GameCell, [{
        key: "positionCell",
        value: function positionCell(positionClass, cellData) {
            var cellInfo = cellData.info;

            return React.createElement(
                "div",
                { "class": positionClass },
                React.createElement(GameLinkedBanner, { bannerData: { cellData: cellData } }),
                React.createElement(
                    GameInfo,
                    null,
                    cellInfo
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var cellIndex = this.props.children;
            var className = cellIndex == getDataLenght() - 1 ? LAST_CELL_CLASS_NAME : NORMAL_CELL_CLASS_NAME;

            return this.positionCell(className, this.props.cell.data);
        }
    }]);

    return GameCell;
}(React.Component);

export default GameCell;