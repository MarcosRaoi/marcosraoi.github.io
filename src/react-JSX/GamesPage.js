import GameCell from "./GameCell.js"
import GameFilter from "./GameFilter.js";

class GamesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellsReceived: this.props.children.cells,
            filterState: ""
        }
        this.pageWithCells = [];
    }

    releaseFilterCells() {
        this.state.cellsReceived.sort((a, b) => {
            let aValue = parseInt(a.data.release.replaceAll("/", ""));
            let bValue = parseInt(b.data.release.replaceAll("/", ""));
            return bValue - aValue;
        })

        this.createCells();
    }

    createCells() {
        this.pageWithCells = [];
        
        let index = 0;

        this.state.cellsReceived.forEach(
            () => {
                let eachCell = this.state.cellsReceived[index]
                this.pageWithCells.push(<GameCell cell={eachCell}>{index}</GameCell>);
                index++;
            }
        );
    }

    renderCells(str_filterMode) {
        this.pageWithCells = [];

        switch (str_filterMode) {
            case "release":
                this.releaseFilterCells();
                break;
            case "":
            default:
                this.createCells();
                break;
        }

        return this.pageWithCells;
    }

    filterCells(str_filterMode) {
        this.setState(() => {
            return ( {filterState:  str_filterMode });
        })
    }

    appendGameFilter(page) {
        page.unshift(<GameFilter filterFunc={(str) => this.filterCells(str)}/>);
    }

    render() {
        let page = this.renderCells(this.state.filterState);
        this.appendGameFilter(page);
        return(page);
    }
}

export default GamesPage;