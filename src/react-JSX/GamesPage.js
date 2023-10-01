import GameCell from "./GameCell.js"
import GameMenuFilters from "./GameMenuFilters.js";

class GamesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellsReceived: this.props.children.cells,
        }
        this.pageWithCells = [];
        this.orderCellsIndex();
        this.lastFilter;
    }

    setLastFilter(lastFilter) {
        this.lastFilter = lastFilter;
    }

    updateCells(cellsOrder = this.state.cellsReceived) {
        this.render(cellsOrder);
    }

    getCells() {
        return this.state.cellsReceived;
    }

    // Called only once in the Constructor
    orderCellsIndex() {
        let cellsOrder = this.state.cellsReceived.sort(function (a, b) {return a.index - b.index;});
        this.createCells(cellsOrder);
    }

    createCells(cellsOrder = this.state.cellsReceived) {
        this.pageWithCells = [];

        let cellIndex = 0;
        cellsOrder.forEach(
            () => {
                let eachCell = cellsOrder[cellIndex];
                this.pageWithCells.push(<GameCell lastFilter={this.lastFilter} cell={eachCell}>{cellIndex}</GameCell>);
                cellIndex++;
            }
        );

        return this.pageWithCells;
    }

    setCellsReceived(cells) {
        this.setState(() => {
            return ( {cellsReceived:  cells });
        })
    }

    appendGameFilter(page) {
        page.unshift(<GameMenuFilters gamesPageRef={this}/>);
    }

    render(cellsOrder) {
        let page = this.createCells(cellsOrder);
        this.appendGameFilter(page);
        return(page);
    }
}

export default GamesPage;