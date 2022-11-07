import GameBanner from "./GameBanner.js";

class GameLinkedBanner extends React.Component {
    constructor({ bannerData }) {
        super({ bannerData });
    }

    getLinkTarget(str_target) {
        return str_target ? str_target : "_self";
    }

    render() {
        let myBannerData = this.props.bannerData.cellData;
        let cellHref = myBannerData.link;
        let cellTarget = myBannerData.target;
        let cellId = myBannerData.key;

        return (
            <div class="linked_banner">
                <a href={cellHref} target={this.getLinkTarget(cellTarget)}>
                    <GameBanner>{cellId}</GameBanner>
                </a>
            </div>
        );
    }
}

export default GameLinkedBanner;