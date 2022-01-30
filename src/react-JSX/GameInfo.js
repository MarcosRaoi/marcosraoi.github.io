class GameInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myInfo = this.props.children;

        return (
            <div class="info">
                <div dangerouslySetInnerHTML={{ __html: myInfo }} />
            </div>
        );
    }
}

export default GameInfo;