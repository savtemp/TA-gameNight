import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";

// Public Functions
export class PlayersController {
  constructor() {
    // console.log("Hello from the players controller");
    this.drawPlayer();
  }

  drawPlayer() {
    console.log("drawing player");
    let template = "";
    appState.players.forEach((p) => (template += p.playerTemplate));
    document.getElementById("players").innerHTML = template;
  }

  addPlayer() {
    console.log("adding new player");
    try {
      // @ts-ignore
      window.event.preventDefault();
      let form = window.event?.target;
      let playerData = {
        // @ts-ignore
        name: form.name.value,
      };
      playersService.createNewPlayer(playerData);
      // @ts-ignore
      form.reset();
      this.drawPlayer();
    } catch (error) {
      console.error("[Adding Player]", error);
    }
  }

  increaseScore(name) {
    console.log("increase score", name);
    playersService.increaseScore(name);
    this.drawPlayer();
  }
}
