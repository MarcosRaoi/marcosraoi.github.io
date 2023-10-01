class GameCellTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    getActualTitle() {
        return this.props.children;
    }

    render() {
        return (<div class="game_cell_title">{this.getActualTitle()}</div>);
    }
}

export default GameCellTitle;