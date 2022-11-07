class ContactImage extends React.Component {
    constructor(props) {
        super(props);
    }

    getStyleImage(keyId) {
        return { backgroundImage: `url(../img/redes_sociais/${keyId}.png)`, backgroundSize: 'cover' };
    }

    render() {
        let key = this.props.id;
        return (<div class="img_redes_sociais" id={key} style={this.getStyleImage(key)}></div>);
    }
}

export default ContactImage;