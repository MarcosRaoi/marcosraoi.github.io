class InfoJogo extends React.Component {
    constructor(props) {
        super(props);
    }
}

InfoJogo = (props) => {
    let my_info = props.info;

    return (
        <div dangerouslySetInnerHTML={{ __html: my_info }} />
    );
}