import GameFilter from "./GameFilter.js";

class GameMenuFilters extends React.Component {
    constructor(props) {
        super(props);
        this.filterFunc = this.props.filterFunc;
        this.gamesPageRef = this.props.gamesPageRef;
    }

    updadeGamePage(gamesPage, cellsOrder) {
        gamesPage.setCellsReceived(cellsOrder);
        gamesPage.updateCells(cellsOrder);
    }

    filterRelease() {
        let gamePage = this.gamesPageRef;
        let cells = gamePage.getCells();

        cells.sort((a, b) => {
            let aParsedReleaseData = parseInt(a.data["release"].replaceAll("/", ""));
            let bParsedReleaseData = parseInt(b.data["release"].replaceAll("/", ""));
            return bParsedReleaseData - aParsedReleaseData;
        })

        this.updadeGamePage(gamePage, cells);
    }

    render() {
        return (
            <div class="game_filters"> ORDENAR POR:
                <GameFilter func={() => this.filterRelease()}>LANÇAMENTO</GameFilter>
            </div>
        )
    }
}

export default GameMenuFilters;