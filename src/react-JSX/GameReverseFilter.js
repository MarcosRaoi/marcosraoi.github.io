const normalOrderCharacter = "↑";
const oppositeOrderCharacter = "↓";

class GameReverseFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boolReverse: false
        }
        this.setGameReverseFilterReference(this);
    }

    setGameReverseFilterReference(classRef) {
        let menu = this.props.gameMenuFilterRef;
        menu.gameReverseFilterRef = classRef;
    }

    resetBoolReverse() {
        let boolValue = false;
        this.setState(() => {
            return ( {boolReverse:  boolValue });
        })
    }

    setBoolReverse(boolValue) {
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
        return this.getBoolReverse()? oppositeOrderCharacter : normalOrderCharacter;
    }

    onGameReverseClick() {
        this.props.gameMenuFilterRef.revertFilter(); 
        this.reverseRevertText();
    }

    render() {
        return (
            <button class="revert_filter" onClick={() => this.onGameReverseClick()}>{this.getRevertText()}</button>
        ) //<button class="revert_filter" onClick={() => this.revertFilter()}>{this.getRevertText()}</button>
    }
}

export default GameReverseFilter;