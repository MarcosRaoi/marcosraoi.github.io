class GameBanner extends React.Component {
    constructor({ children }) {
        super({ children });
    }

    getStyleImage(keyId) {
        return { backgroundImage: `url(../img/banners/banner_${keyId}.png)`, backgroundSize: 'cover' }
    }

    render() {
        let key = this.props.children;
        return (<div class="banner" id={key} style={this.getStyleImage(key)}></div>)
    }
}

export default GameBanner;