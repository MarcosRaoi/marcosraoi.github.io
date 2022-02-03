import MenuNavigation from "./react/MenuNavigation.js";

const ID_MENU_NAVIGATION = "topper";

function renderMenuNavigation() {
    let domContainer = document.getElementById(ID_MENU_NAVIGATION);
    ReactDOM.render(React.createElement(MenuNavigation), domContainer);
}

renderMenuNavigation();