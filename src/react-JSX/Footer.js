class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                ϟ Blue Lightning - by Marcos "Raoi" Cavalcante - v-{this.props.PORTFOLIO_VERSION}
            </div>
        )
    }
}

export default Footer;