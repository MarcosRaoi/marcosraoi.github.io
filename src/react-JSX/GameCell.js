import { getDataLenght } from "../getJson.js";
import GameInfo from "./GameInfo.js";
import GameLinkedBanner from "./GameLinkedBanner.js";

const LAST_CELL_CLASS_NAME = "celula_de_jogo_ultima";
const NORMAL_CELL_CLASS_NAME = "celula_de_jogo";

class GameCell extends React.Component {
    constructor(props) {
        super(props);
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

        if (cellIndex == getDataLenght() - 1) {
            return this.positionCell(LAST_CELL_CLASS_NAME, this.props.cell.data);
        } else {
            return this.positionCell(NORMAL_CELL_CLASS_NAME, this.props.cell.data);
        }
    }
}

export default GameCell;