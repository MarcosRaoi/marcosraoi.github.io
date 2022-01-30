import GameCell from "./GameCell.js"

let cellsReceived = [];

class GamesPage extends React.Component {
    constructor(props) {
        super(props);
        cellsReceived = props.children.cells
    }

    createCells() {
        let index = 0;
        let pageWithCells = [];
        cellsReceived.forEach(
            () => {
                let eachCell = cellsReceived[index]
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