import data from "../json/game_cells.json" assert { type: "json" };

export function getJson() {
    return data;
}

export function getDataLenght() {
    return data.length
}