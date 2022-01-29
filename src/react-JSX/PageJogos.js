let cells_received = [];

class PageJogos extends React.Component {
    constructor(props) {
        super(props);
        cells_received = props.children.cells;
    }

    createCelulas() {
        let index = 0;
        let pageWithCells = [];
        cells_received.forEach(() => {
            let eachCell = cells_received[index]
            pageWithCells.push(
                <CelulaJogos cell={eachCell}>
                    {index}
                </CelulaJogos>);
            index++;
        });

        return pageWithCells;
    }

    render() {
        let page = this.createCelulas();
        return(page);
    }
}