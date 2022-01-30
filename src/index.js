import { getJson } from "./getJson.js";
import PageJogos from "./react/PageJogos.js"

let cells = getJson();

const ID_PAGE_JOGOS = "page_jogos";

renderPageJogos();

function renderPageJogos() {
    let domContainer = document.getElementById(ID_PAGE_JOGOS);
    ReactDOM.render(React.createElement(PageJogos, null, {cells}), domContainer);
}