class GameBanner extends React.Component {
    constructor({children}) {
        super({children});
        this.key = children;
    }

    getStyleImage(keyId) {
        return {backgroundImage: `url(../img/banners/banner_${keyId}.png)`, backgroundSize: 'cover'}
    }

    render() {
        return (<div class="banner" id={this.key} style={this.getStyleImage(this.key)}></div>)
    }
}

export default GameBanner;