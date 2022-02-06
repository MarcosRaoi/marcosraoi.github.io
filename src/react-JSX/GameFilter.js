class GameFilter extends React.Component {
    constructor(props) {
        super(props);
        console.log("props", this.props)
        this.filterFunc = this.props.filterFunc
        this.state = {}
    }

    render() {
        return (
            <div>
                <div onClick={() => this.filterFunc("release")}> Vamo ver</div>
            </div>
        )
    }
}

export default GameFilter