class GameInfo extends React.Component {
    constructor(props) {
        super(props);
    }
}

GameInfo = (props) => {
    let myInfo = props.children;

    return (
        <div class="info">
            <div dangerouslySetInnerHTML={{ __html: myInfo }} />
        </div>
    );
}

export default GameInfo;