import { getJson } from "./getJson.js";
import GamesPage from "./react/GamesPage.js"

let cells = getJson();

const ID_PAGE_JOGOS = "page_jogos";

renderGamesPage();

function renderGamesPage() {
    let domContainer = document.getElementById(ID_PAGE_JOGOS);
    ReactDOM.render(React.createElement(GamesPage, null, {cells}), domContainer);
}