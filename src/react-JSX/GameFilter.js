class GameFilter extends React.Component {
    render() {
        return (
            <div class="game_each_filter" onClick={() => this.props.func()}>{this.props.children}</div>
        )
    }
}

export default GameFilter;