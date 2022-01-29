const ID_PAGE_JOGOS = "page_jogos";

const requestURL = "https://raw.githubusercontent.com/MarcosRaoi/marcosraoi.github.io/master/json/game_cells.json";
let request = new XMLHttpRequest();
let cells; this.receiveRequests();

// let data = require('../json/game_cells.json')
// console .log("data", data)

function receiveRequests() {
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
        cells = request.response;
        renderPageJogos();
    }
}

function renderPageJogos() {
    let domContainer = document.getElementById(ID_PAGE_JOGOS);
    ReactDOM.render(React.createElement(PageJogos, null, {cells}), domContainer);
}