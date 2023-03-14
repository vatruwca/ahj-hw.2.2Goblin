export default class GoblinGame {
  constructor(element) {
    this.element = element;
    this.activeCell = '';
    this.interval = 1000;
    this.intervalId = null;
    this.cells = this.element.querySelectorAll('.cell');
  }

  renderingGame() {
    this.selectionCell();
    this.intervalGame(this.interval);
  }

  selectionCell() {
    const rand = Math.floor(Math.random() * this.cells.length);
    if (this.activeCell !== this.cells[rand]) {
      this.activeCell = this.cells[rand];
      return this.activeCell;
    } return this.selectionCell();
  }

  deactivateCell() {
    this.activeCell.className = 'cell';
  }

  activateCell() {
    this.activeCell.classList.add('cell_goblin');
  }

  intervalGame(interval) {
    this.intervalId = setInterval(() => {
      this.deactivateCell();
      this.selectionCell();
      this.activateCell();
    }, interval);
  }

  stopRenderingGame() {
    clearInterval(this.intervalId);
    this.deactivateCell();
  }
}
