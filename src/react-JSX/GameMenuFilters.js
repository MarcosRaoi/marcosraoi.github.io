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
        });

        this.updadeGamePage(gamePage, cells);
    }

    filterAlphabetical() {
        let gamePage = this.gamesPageRef;
        let cells = gamePage.getCells();

        cells.sort((a,b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        this.updadeGamePage(gamePage, cells);
    }

    render() {
        return (
            <div class="game_filters"> ORDENAR POR:
                <GameFilter func={() => this.filterRelease()}>LANÇAMENTO</GameFilter>
                <GameFilter func={() => this.filterAlphabetical()}>A / Z</GameFilter>
            </div>
        )
    }
}

export default GameMenuFilters;