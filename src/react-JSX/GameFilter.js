class GameFilter extends React.Component {
    constructor(props) {
        super(props);
        this.filterFunc = this.props.filterFunc;
    }

    render() {
        return (
            <div class="game_filters">
                <div onClick={() => this.filterFunc("release")}>Ordenar por jogos mais novos</div>
            </div>
        )
    }
}

export default GameFilter