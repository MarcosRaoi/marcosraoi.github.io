import { getDataLenght } from "../getJson.js";

class GameResetFilter extends React.Component {

    getTotalGames() {
        console.log("There are", getDataLenght(), "games in this Portfolio!")
        return "(" + getDataLenght() + ") ";
    }

    render() {
        return (
            <div class="reset_filter" onClick={() => this.props.gameMenuFilterRef.resetFilter()}>{this.getTotalGames() + this.props.children}</div>
        ) //<div class="reset_filter" onClick={() => this.resetFilter()}>ORDENAR POR:</div>
    }
}

export default GameResetFilter;