class ContactPage extends React.Component {

    render() {
        return(
            <div id="page_contato" class="page">

                <div class="redes_sociais">
                    <a href="https://www.facebook.com/markinhos.cf" target="_blank">
                        <div class="img_redes_sociais" id="facebook"></div>
                        <div class="txt_redes_sociais">
                            https://www.facebook.com/markinhos.cf<br/>
                            https://www.facebook.com/BlueLightningStudio
                        </div>
                    </a>
                </div>

                <div class="redes_sociais">
                    <a href="https://www.instagram.com/marcosraoi/" target="_blank">
                        <div class="img_redes_sociais" id="instagram"></div>
                        <div class="txt_redes_sociais"> https://www.instagram.com/marcosraoi/</div>
                    </a>
                </div>

                <div class="redes_sociais">
                    <a href="https://www.linkedin.com/in/marcos-cavalcante-de-freitas-8bb55a120/" target="_blank">
                        <div class="img_redes_sociais" id="linkedin"></div>
                        <div class="txt_redes_sociais">https://www.linkedin.com/in/marcos-cavalcante-de-freitas-8bb55a120/</div>
                    </a>
                </div>

            </div>
        )
    }
}

export default ContactPage;