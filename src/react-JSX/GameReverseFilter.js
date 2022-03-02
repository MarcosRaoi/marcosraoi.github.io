class GameReverseFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boolReverse: false
        }
    }

    setBoolReverse(boolValue) {
        console.log("setBoolReverse(boolValue)", boolValue);
        this.setState(() => {
            return ( {boolReverse:  boolValue });
        })
    }

    getBoolReverse() {
        return this.state.boolReverse;
    }

    reverseRevertText() {
        this.setBoolReverse(!this.getBoolReverse());
    }

    getRevertText() {
        return this.getBoolReverse()? "↓" : "↑";
    }

    onGameReverseClick() {
        this.props.eu.revertFilter(); 
        this.reverseRevertText();
    }

    render() {
        return (
            <button class="revert_filter" onClick={() => this.onGameReverseClick()}>{this.getRevertText()}</button>
        ) //<button class="revert_filter" onClick={() => this.revertFilter()}>{this.getRevertText()}</button>
    }
}

export default GameReverseFilter;