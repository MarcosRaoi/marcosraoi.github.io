import { getJson } from "./getJson.js";
import MenuNavigation from "./react/MenuNavigation.js";
import GamesPage from "./react/GamesPage.js"

const ID_GAMES_PAGE = "page_jogos";
const ID_MENU_NAVIGATION = "topper";

function renderMenuNavigation() {
    let domContainer = document.getElementById(ID_MENU_NAVIGATION);
    ReactDOM.render(React.createElement(MenuNavigation), domContainer);
}

function renderGamesPage(cells) {
    let domContainer = document.getElementById(ID_GAMES_PAGE);
    ReactDOM.render(React.createElement(GamesPage, null, {cells}), domContainer);
}

renderMenuNavigation();

let mainScript = document.getElementsByTagName('script')[2];
let page = mainScript.getAttribute("page");
if (page == "jogos") {
    renderGamesPage(getJson());
}