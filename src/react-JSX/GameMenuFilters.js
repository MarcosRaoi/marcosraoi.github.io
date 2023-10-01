import GameFilter from "./GameFilter.js";
import GameResetFilter from "./GameResetFilter.js";
import GameReverseFilter from "./GameReverseFilter.js";

const FILTERS = {
    "DEFAULT": 0,
    "RELEASE": 1,
    "ALPHABETICAL": 2, 
    "LANGUAGE": 3, 
    "TECHNOLOGY": 4, 
    "PLATFORM": 5,
    "REVERT": -1,
}

const resetFilterText = "ORDENAR POR:";
const filterTexts = ["LANÇAMENTO", "A / Z", "LINGUAGEM", "TECNOLOGIA", "PLATAFORMA"];

const keyFilterRelease = "release";
const keyFilterLanguage = "language";
const keyFilterTechnology = "technology";
const keyFilterPlatform = "platform";

class GameMenuFilters extends React.Component {
    constructor(props) {
        super(props);
        this.gamesPageRef = this.props.gamesPageRef;
        this.gameReverseFilterRef = undefined;
        this.lastFilter;
    }

    updadeGamePage(gamesPage, cellsOrder) {
        this.gameReverseFilterRef.resetBoolReverse();
        gamesPage.setCellsReceived(cellsOrder);
        gamesPage.updateCells(cellsOrder);
    }

    baseFilter(gamesPage, cellsOrder, lastFilter) {
        this.updadeGamePage(gamesPage, cellsOrder);
        this.lastFilter = lastFilter;

        this.gamesPageRef.setLastFilter(this.lastFilter);
    }

    baseLog() {
        console.clear();
    }

    logRelease(cells) {
        this.baseLog();

        console.log("Release Order");
        console.log("");

        let releaseOrderIndex = 1;
        cells.forEach(element => {
            console.log(releaseOrderIndex + "º - ", element.data.release,"was the release date for", element.name);
            releaseOrderIndex++;
        });
    }

    filterRelease() {
        let gamePage = this.gamesPageRef;
        let cells = gamePage.getCells();

        cells.sort((a, b) => {
            let aParsedReleaseData = parseInt(a.data[keyFilterRelease].replaceAll("/", ""));
            let bParsedReleaseData = parseInt(b.data[keyFilterRelease].replaceAll("/", ""));
            return bParsedReleaseData - aParsedReleaseData;
        });
        this.logRelease(cells);

        this.baseFilter(gamePage, cells, FILTERS.RELEASE);
    }

    logAlphabetical(cells) {
        this.baseLog();

        console.log("Alphabetical Order");
        console.log("");

        let alphabeticalOrderIndex = 1;
        cells.forEach(element => {
            console.log(alphabeticalOrderIndex + "º", element.name);
            alphabeticalOrderIndex++;
        });
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
        this.logAlphabetical(cells);

        this.baseFilter(gamePage, cells, FILTERS.ALPHABETICAL);
    }

    logProps(cells = [], dataProp = "") {
        this.baseLog();

        cells.forEach(element => {
            console.log(dataProp, " >> " , element.data[dataProp]);
        });
    }

    getFilterTypeData(dataProp) {
        return FILTERS[dataProp.toUpperCase()]
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

        this.logProps(cells, dataProp);

        this.baseFilter(gamePage, cells, this.getFilterTypeData(dataProp));
    }

    //GameResetFilter.js
    resetFilter() {
        let gamePage = this.gamesPageRef;
        let cells = gamePage.getCells();

        this.baseLog();

        cells.sort((a, b) => {return a.index - b.index;});
    
        this.baseFilter(gamePage, cells, FILTERS.DEFAULT);
    }

    //GameReverseFilter.js
    revertFilter() {
        this.baseLog();

        let gamePage = this.gamesPageRef;
        let cells = gamePage.getCells();
        cells.reverse();

        this.baseFilter(gamePage, cells, FILTERS.REVERT);
    }

    render() {
        return (
            <div class="game_filters">
                <GameResetFilter gameMenuFilterRef={this}>{resetFilterText}</GameResetFilter>

                <GameFilter func={() => this.filterRelease()}>                          {filterTexts[0]}</GameFilter>
                <GameFilter func={() => this.filterAlphabetical()}>                     {filterTexts[1]}</GameFilter>
                <GameFilter func={() => this.filterData(keyFilterLanguage, true)}>      {filterTexts[2]}</GameFilter>
                <GameFilter func={() => this.filterData(keyFilterTechnology, true)}>    {filterTexts[3]}</GameFilter>
                <GameFilter func={() => this.filterData(keyFilterPlatform, true)}>      {filterTexts[4]}</GameFilter>

                <GameReverseFilter gameMenuFilterRef={this}/>
            </div>
        )
    }
}

export default GameMenuFilters;