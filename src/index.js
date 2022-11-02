import Footer from "./react/Footer.js";
import MenuNavigation from "./react/MenuNavigation.js";

const PORTFOLIO_VERSION = "1.18.0";
const ID_MENU_NAVIGATION = "topper";
const ID_FOOTER = "bottom";

function renderMenuNavigation() {
    let domContainer = document.getElementById(ID_MENU_NAVIGATION);
    ReactDOM.render(React.createElement(MenuNavigation), domContainer);
}

function renderFooter() {
    let domContainer = document.getElementById(ID_FOOTER);
    ReactDOM.render(React.createElement(Footer, {PORTFOLIO_VERSION}), domContainer);
}

renderMenuNavigation();
renderFooter();