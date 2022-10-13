//import localGameData from "../json/game_cells.json" assert { type: "json" };
//import("../json/game_cells.json", {assert: {type: "json"} });
import { renderGamesPage } from "../src/page_scripts/jogos.js";

const requestURL = "https://raw.githubusercontent.com/MarcosRaoi/marcosraoi.github.io/master/json/game_cells.json";
let request = new XMLHttpRequest();
let gameData;
gameDataRequest();

export function getDataLenght() {
    return gameData.length
}

function gameDataRequest() {
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
        gameData = request.response;
        //if (localGameData){gameData = localGameData;}
        renderGamesPage(gameData);
        //console.log("data ", gameData);
        //renderGamesPage(localGameData);
    }
}