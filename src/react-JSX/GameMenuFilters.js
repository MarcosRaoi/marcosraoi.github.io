import GameFilter from "./GameFilter.js";
import GameResetFilter from "./GameResetFilter.js";
import GameReverseFilter from "./GameReverseFilter.js";

class GameMenuFilters extends React.Component {
    constructor(props) {
        super(props);
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

    logProps(dataProp = "", cells = []) {
        console.clear();
        cells.forEach(element => {
            console.log(dataProp, " >> " , element.data[dataProp]);
        });
    }

    filterData(dataProp = "", isAlphabetical = false) {
        if (isAlphabetical) {
            this.filterAlphabetical();
        }

        let gamePage = this.gamesPageRef;
        let cells = gamePage.getCells();

        cells.sort((a,b) => {
            if (a.data[dataProp] > b.data[dataProp]) {
                return 1;
            }
            if (a.data[dataProp] < b.data[dataProp]) {
                return -1;
            }
            return 0;
        });

        this.logProps(dataProp, cells);
        this.updadeGamePage(gamePage, cells);
    }

    //GameResetFilter.js
    resetFilter() {
        let gamePage = this.gamesPageRef;
        let cells = gamePage.getCells();
        cells.sort((a, b) => {return a.index - b.index;});
        this.updadeGamePage(gamePage, cells);
    }

    //GameReverseFilter.js
    revertFilter() {
        let gamePage = this.gamesPageRef;
        let cells = gamePage.getCells();
        cells.reverse();
        this.updadeGamePage(gamePage, cells);
    }

    render() {
        return (
            <div class="game_filters">
                <GameResetFilter eu={this}>ORDENAR POR:</GameResetFilter>

                <GameFilter func={() => this.filterRelease()}>LANÇAMENTO</GameFilter>
                <GameFilter func={() => this.filterAlphabetical()}>A / Z</GameFilter>
                <GameFilter func={() => this.filterData("language", true)}>LINGUAGEM</GameFilter>
                <GameFilter func={() => this.filterData("technology", true)}>TECNOLOGIA</GameFilter>

                <GameReverseFilter eu={this}/>
            </div>
        )
    }
}

export default GameMenuFilters;