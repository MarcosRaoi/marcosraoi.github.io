import { getDataLenght } from "../getJson.js";
import InfoJogo from "./InfoJogo.js";

class CelulaJogos extends React.Component {
    constructor(props) {
        super(props);
    }
}

function positionCell(positionClass, cellData) {    
    let cell_href = cellData.link;
    let cell_id = cellData.key;
    let cell_info = cellData.info;

    return (
        <div class={positionClass}>
            <a href={cell_href}>
            <div class="banner" id={cell_id}></div></a>
            <div class="info">
                <InfoJogo info={cell_info} />
            </div>
        </div>
    );
}

CelulaJogos = (props) => {
    if (props.children == getDataLenght() - 1) {
        return positionCell("celula_de_jogo_ultima", props.cell.data);
    } else {
        return positionCell("celula_de_jogo", props.cell.data);
    }
}

export default CelulaJogos