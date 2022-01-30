import GameCell from "./GameCell.js"

class GamesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellsReceived: this.props.children.cells
        }
    }

    createCells() {
        let index = 0;
        let pageWithCells = [];

        this.state.cellsReceived.forEach(
            () => {
                let eachCell = this.state.cellsReceived[index]
                pageWithCells.push(<GameCell cell={eachCell}>{index}</GameCell>);
                index++;
            });

        return pageWithCells;
    }

    render() {
        let page = this.createCells();
        return(page);
    }
}

export default GamesPage;