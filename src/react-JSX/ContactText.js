import { SOCIAL_NETWORKS } from "./ContactPage.js";

class ContactText extends React.Component {
    constructor(props) {
        super(props);
    }

    getSocialNetworkTexts(keyId) {
        switch (keyId) {
            case SOCIAL_NETWORKS.Facebook:
                return (<div>
                    https://www.facebook.com/markinhos.cf/<br />
                    https://www.facebook.com/BlueLightningStudio/
                </div>);

            case SOCIAL_NETWORKS.Instagram:
                return (<div>https://www.instagram.com/marcosraoi/</div>)

            case SOCIAL_NETWORKS.Linkedin:
                return (<div>https://www.linkedin.com/in/marcos-cavalcante-de-freitas-8bb55a120/</div>)

            case SOCIAL_NETWORKS.GitHub:
                return (<div>https://www.github.com/MarcosRaoi/</div>)

            default:
                break;
        }
    }

    render() {
        let key = this.props.id;
        return (
            <div class="txt_redes_sociais">
                {this.getSocialNetworkTexts(key)}
            </div>
        );
    }
}

export default ContactText;