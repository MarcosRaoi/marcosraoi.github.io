class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                ϟ Blue Lightning - by Marcos "Raoi" Cavalcante - {this.props.PORTFOLIO_VERSION}
            </div>
        )
    }
}

export default Footer;