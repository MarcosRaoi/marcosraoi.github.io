import GameCell from "./GameCell.js"
import GameMenuFilters from "./GameMenuFilters.js";

class GamesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellsReceived: this.props.children.cells,
            filterState: ""
        }
        this.pageWithCells = [];
    }

    updateCells(cellsOrder) {
        this.render(cellsOrder);
    }

    getCells() {
        return this.state.cellsReceived;
    }

    createCells(cellsOrder = this.state.cellsReceived) {
        this.pageWithCells = [];
        
        let index = 0;

        cellsOrder.forEach(
            () => {
                let eachCell = cellsOrder[index]
                this.pageWithCells.push(<GameCell cell={eachCell}>{index}</GameCell>);
                index++;
            }
        );

        return this.pageWithCells
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