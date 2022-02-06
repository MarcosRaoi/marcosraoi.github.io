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
            let aValue = parseInt(a.data.release.replace("/", ""))
            let bValue = parseInt(b.data.release.replace("/", ""))
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
                console.log("each Cell", eachCell.data.key)
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
        console.log("str_filterMode", str_filterMode)
        this.setState(() => {
            return ( {filterState:  str_filterMode })
        })

        console.log("filterState", this.state.filterState);
    }

    render() {
        console.log("afe", this.state.filterState);
        let page = this.renderCells(this.state.filterState);
        page.unshift(<GameFilter filterFunc={(str) => this.filterCells(str)}/>);

        console.log("page", page);
        return(page);
    }
}

export default GamesPage;