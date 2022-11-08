import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";

class PlayersService {
  createNewPlayer(playerData) {
    let newPlayer = new Player(playerData.name);
    console.log("This is a new player", newPlayer);
    appState.players.push(newPlayer);
  }

  increaseScore(name) {
    console.log("increasing player score");
    let player = appState.players.find((p) => p.name == name);
    // @ts-ignore
    player.score++;
  }
}

export const playersService = new PlayersService();
