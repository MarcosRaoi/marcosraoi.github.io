import { getDataLenght } from "../getJson.js";
import GameInfo from "./GameInfo.js";
import GameLinkedBanner from "./GameLinkedBanner.js";
import GameCellTitle from "./GameCellTitle.js";

const LAST_CELL_CLASS_NAME = "celula_de_jogo_ultima";
const NORMAL_CELL_CLASS_NAME = "celula_de_jogo";
const INVISIBLE_GAME_CELL_CLASS_NAME = "game_cell_invisible"

class GameCell extends React.Component {
    constructor(props) {
        super(props);
        this.cellObj = {};
        this.lastAcceptFilter = 0;
    }

    getClassName(cellIndexPosition, cellObject) {
        if (cellObject.hidden) {
            return INVISIBLE_GAME_CELL_CLASS_NAME;
        }
        return (cellIndexPosition == getDataLenght() - 1) ? LAST_CELL_CLASS_NAME : NORMAL_CELL_CLASS_NAME;
    }

    getGameCellTitle(lastFilter = 0) {
        if (lastFilter < 0) {
            return this.getGameCellTitle(this.lastAcceptFilter);
        }

        this.lastAcceptFilter = lastFilter;

        switch (this.lastAcceptFilter) {
            case 1:
                return this.cellObj.data.release;
            case 2:
                return this.cellObj.name;
            case 3:
                return this.cellObj.data.language;
            case 4:
                return this.cellObj.data.technology;
            case 5:
                return this.cellObj.data.platform;
            default:
                return this.cellObj.name;
        }
    }

    positionCell(positionClass, cellData) {
        let cellInfo = cellData.info;

        return (
            <div class={positionClass}>
                <GameCellTitle>{this.getGameCellTitle(this.props.lastFilter)}</GameCellTitle>
                <GameLinkedBanner bannerData={{ cellData }} />
                <GameInfo>{cellInfo}</GameInfo>
            </div>
        );
    }

    render() {
        let cellIndex = this.props.children;
        let className = this.getClassName(cellIndex, this.props.cell);
        this.cellObj = this.props.cell;

        return this.positionCell(className, this.props.cell.data);
    }
}

export default GameCell;