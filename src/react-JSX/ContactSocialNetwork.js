import { SOCIAL_NETWORKS } from "./ContactPage.js";
import ContactImage from "./ContactImage.js";
import ContactText from "./ContactText.js";

class ContactSocialNetwork extends React.Component {
    constructor(props) {
        super(props);
    }

    getSocialNetworkLink(keyId) {
        switch (keyId) {
            case SOCIAL_NETWORKS.Facebook:
                return "https://www.facebook.com/markinhos.cf"
            
            case SOCIAL_NETWORKS.Instagram:
                return "https://www.instagram.com/marcosraoi/"

            case SOCIAL_NETWORKS.Linkedin:
                return "https://www.linkedin.com/in/marcos-cavalcante-de-freitas-8bb55a120/"
            
            case SOCIAL_NETWORKS.GitHub:
                return "https://www.github.com/MarcosRaoi/"
        
            default:
                break;
        }
    }

    render() {
        let key = this.props.id;
        return (
            <div class="redes_sociais">
                <a href={this.getSocialNetworkLink(key)} target="_blank">
                    <ContactImage id={key} />
                    <ContactText id={key} />
                </a>
            </div>
        );
    }
}

export default ContactSocialNetwork;