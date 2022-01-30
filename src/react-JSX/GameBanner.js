class GameBanner extends React.Component {
    constructor({children}) {
        super({children});
        this.key = children;
    }

    render() {
        return (<div class="banner" id={this.key}></div>)
    }
}

export default GameBanner;