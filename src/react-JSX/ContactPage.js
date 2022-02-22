import ContactImage from "./ContactImage.js";

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="page_contato" class="page">

                <div class="redes_sociais">
                    <a href="https://www.facebook.com/markinhos.cf" target="_blank">
                        <ContactImage id="facebook" />
                        <div class="txt_redes_sociais">
                            https://www.facebook.com/markinhos.cf<br/>
                            https://www.facebook.com/BlueLightningStudio
                        </div>
                    </a>
                </div>

                <div class="redes_sociais">
                    <a href="https://www.instagram.com/marcosraoi/" target="_blank">
                        <ContactImage id="instagram" />
                        <div class="txt_redes_sociais"> https://www.instagram.com/marcosraoi/</div>
                    </a>
                </div>

                <div class="redes_sociais">
                    <a href="https://www.linkedin.com/in/marcos-cavalcante-de-freitas-8bb55a120/" target="_blank">
                        <ContactImage id="linkedin" />
                        <div class="txt_redes_sociais">https://www.linkedin.com/in/marcos-cavalcante-de-freitas-8bb55a120/</div>
                    </a>
                </div>

            </div>
        )
    }
}

export default ContactPage;