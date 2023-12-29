import localJsonGameData from "../json/game_cells.json" assert { type: "json" };
//import("../json/game_cells.json", {assert: {type: "json"} });

export function localGameData() {
    console.log("local json game data", localJsonGameData);
    return localJsonGameData;
}