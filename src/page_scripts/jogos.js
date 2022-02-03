import GamesPage from "../react/GamesPage.js"
import { getJson } from "../getJson.js";

const ID_GAMES_PAGE = "page_jogos";

//let mainScript = document.getElementsByTagName('script')[2];
// let page = mainScript.getAttribute("page");
// if (page == "jogos") {
    // renderGamesPage(getJson());
// }

function renderGamesPage(cells) {
    let domContainer = document.getElementById(ID_GAMES_PAGE);
    ReactDOM.render(React.createElement(GamesPage, null, {cells}), domContainer);
}

renderGamesPage(getJson());