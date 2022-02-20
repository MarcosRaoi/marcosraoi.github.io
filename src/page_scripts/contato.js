import ContactPage from "../react/ContactPage.js";

const ID_CONTACT_PAGE = "page_contato";

function renderContactPage() {
    let domContainer = document.getElementById(ID_CONTACT_PAGE);
    ReactDOM.render(React.createElement(ContactPage), domContainer);
}

renderContactPage();