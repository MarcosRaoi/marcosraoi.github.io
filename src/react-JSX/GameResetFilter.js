class GameResetFilter extends React.Component {
    render() {
        return (
            <div class="reset_filter" onClick={() => this.props.gameMenuFilterRef.resetFilter()}>{this.props.children}</div>
        ) //<div class="reset_filter" onClick={() => this.resetFilter()}>ORDENAR POR:</div>
    }
}

export default GameResetFilter;