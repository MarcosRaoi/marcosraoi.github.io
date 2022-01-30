function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { getDataLenght } from "../getJson.js";
import GameInfo from "./GameInfo.js";

var LAST_CELL_CLASS_NAME = "celula_de_jogo_ultima";
var NORMAL_CELL_CLASS_NAME = "celula_de_jogo";

var GameCell = function (_React$Component) {
    _inherits(GameCell, _React$Component);

    function GameCell(props) {
        _classCallCheck(this, GameCell);

        return _possibleConstructorReturn(this, (GameCell.__proto__ || Object.getPrototypeOf(GameCell)).call(this, props));
    }

    return GameCell;
}(React.Component);

function getLinkTarget(str_target) {
    return str_target ? str_target : "_self";
}

function positionCell(positionClass, cellData) {
    // All datas are 'strings' at JSON
    var cellHref = cellData.link;
    var cellTarget = cellData.target;
    var cellId = cellData.key;
    var cellInfo = cellData.info;

    return React.createElement(
        "div",
        { "class": positionClass },
        React.createElement(
            "a",
            { href: cellHref, target: getLinkTarget(cellTarget) },
            React.createElement("div", { "class": "banner", id: cellId })
        ),
        React.createElement(
            GameInfo,
            null,
            cellInfo
        )
    );
}

GameCell = function GameCell(props) {
    if (props.children == getDataLenght() - 1) {
        return positionCell(LAST_CELL_CLASS_NAME, props.cell.data);
    } else {
        return positionCell(NORMAL_CELL_CLASS_NAME, props.cell.data);
    }
};

export default GameCell;