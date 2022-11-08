export class Player {
  constructor(name) {
    (this.name = name), (this.score = 0);
  }

  get playerTemplate() {
    return `
    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <p class="m-0 pt-2">${this.name} - ${this.score}</p>
        <button class="btn btn-success" onclick="app.playersController.increaseScore('${this.name}')">
          <i class="mdi mdi-plus"></i>
        </button>
      </div>
    </div>
    `;
  }
}
