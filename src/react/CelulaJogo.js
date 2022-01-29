function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CREATING_EACH_PHRASE = "Created a Celula";

var CelulaJogos = function (_React$Component) {
    _inherits(CelulaJogos, _React$Component);

    function CelulaJogos(props) {
        _classCallCheck(this, CelulaJogos);

        return _possibleConstructorReturn(this, (CelulaJogos.__proto__ || Object.getPrototypeOf(CelulaJogos)).call(this, props));
    }

    return CelulaJogos;
}(React.Component);

function positionCell(nameClass, cellData) {
    var cell_href = cellData.link;
    var cell_id = cellData.key;
    var cell_info = cellData.info;

    return React.createElement(
        "div",
        { "class": nameClass },
        React.createElement(
            "a",
            { href: cell_href },
            React.createElement("div", { "class": "banner", id: cell_id })
        ),
        React.createElement(
            "div",
            { "class": "info" },
            React.createElement(InfoJogo, { info: cell_info })
        )
    );
}

CelulaJogos = function CelulaJogos(props) {
    if (props.children == cells.length - 1) {
        return positionCell("celula_de_jogo_ultima", props.cell.data);
    } else {
        return positionCell("celula_de_jogo", props.cell.data);
    }
};