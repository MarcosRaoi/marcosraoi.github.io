import { getDataLenght } from "../getJson.js";
import GameInfo from "./GameInfo.js";

const LAST_CELL_CLASS_NAME = "celula_de_jogo_ultima";
const NORMAL_CELL_CLASS_NAME = "celula_de_jogo";

class GameCell extends React.Component {
    constructor(props) {
        super(props);
    }
}

function getLinkTarget(str_target) {
    return str_target ? str_target : "_self"
}

function positionCell(positionClass, cellData) {
    // All datas are 'strings' at JSON
    let cellHref = cellData.link;
    let cellTarget = cellData.target;
    let cellId = cellData.key;
    let cellInfo = cellData.info;

    return (
        <div class={positionClass}>
            <a href={cellHref} target={getLinkTarget(cellTarget)}>
                <div class="banner" id={cellId}></div>
            </a>
            <GameInfo>{cellInfo}</GameInfo>
        </div>
    );
}

GameCell = (props) => {
    if (props.children == getDataLenght() - 1) {
        return positionCell(LAST_CELL_CLASS_NAME, props.cell.data);
    } else {
        return positionCell(NORMAL_CELL_CLASS_NAME, props.cell.data);
    }
}

export default GameCell;