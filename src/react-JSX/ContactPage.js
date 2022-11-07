import ContactSocialNetwork from "./ContactSocialNetwork.js";

export const SOCIAL_NETWORKS = {
    Instagram: "instagram",
    Facebook: "facebook",
    Linkedin: "linkedin",
    GitHub: "github"
}

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page_contato" class="page">
                <ContactSocialNetwork id={SOCIAL_NETWORKS.Facebook} />
                <ContactSocialNetwork id={SOCIAL_NETWORKS.Instagram} />
                <ContactSocialNetwork id={SOCIAL_NETWORKS.Linkedin} />
                <ContactSocialNetwork id={SOCIAL_NETWORKS.GitHub} />
            </div>
        )
    }
}

export default ContactPage;