import GameCell from "./GameCell.js"

let cells_received = [];

class GamesPage extends React.Component {
    constructor(props) {
        super(props);
        cells_received = props.children.cells
    }

    createCelulas() {
        let index = 0;
        let pageWithCells = [];
        cells_received.forEach(() => {
            let eachCell = cells_received[index]
            pageWithCells.push(
                <GameCell cell={eachCell}>
                    {index}
                </GameCell>);
            index++;
        });

        return pageWithCells;
    }

    render() {
        let page = this.createCelulas();
        return(page);
    }
}

export default GamesPage;