import { getDataLenght } from "../getJson.js";
import GameInfo from "./GameInfo.js";
import GameLinkedBanner from "./GameLinkedBanner.js";

const LAST_CELL_CLASS_NAME = "celula_de_jogo_ultima";
const NORMAL_CELL_CLASS_NAME = "celula_de_jogo";
const INVISIBLE_GAME_CELL_CLASS_NAME = "game_cell_invisible"

class GameCell extends React.Component {
    constructor(props) {
        super(props);
    }

    getClassName(cellIndexPosition, cellObject) {
        if (cellObject.hidden)
        {
            return INVISIBLE_GAME_CELL_CLASS_NAME;
        }
        return (cellIndexPosition == getDataLenght() - 1) ? LAST_CELL_CLASS_NAME : NORMAL_CELL_CLASS_NAME;
    }

    positionCell(positionClass, cellData) {
        let cellInfo = cellData.info;
    
        return (
            <div class={positionClass}>
                <GameLinkedBanner bannerData={{cellData}}/>
                <GameInfo>{cellInfo}</GameInfo>
            </div>
        );
    }

    render() {
        let cellIndex = this.props.children;
        let className = this.getClassName(cellIndex, this.props.cell);

        return this.positionCell(className, this.props.cell.data);
    }
}

export default GameCell;