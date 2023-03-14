export default class CoblinPlay {
  constructor(goblin) {
    this.goblin = goblin;

    this.clickNewGame = this.clickNewGame.bind(this);
    this.clickCounts = this.clickCounts.bind(this);

    this.board = document.querySelector('.board');
    this.button = document.querySelector('.button');
    this.fail = document.querySelector('.fail');
    this.hit = document.querySelector('.hit');
    this.modal = document.querySelector('.modal');
    this.hitControl = document.querySelector('.hit_control');
    this.failControl = document.querySelector('.fail_control');

    this.countHits = 0;
    this.countFails = 0;
  }

  startGame() {
    this.goblin.renderingGame();
    this.resetCounts();
    this.board.addEventListener('click', this.clickCounts);
  }

  clickCounts(ev) {
    ev.preventDefault();
    if (ev.target.className.includes('cell_goblin')) {
      this.countHits += 1;
      this.hitControl.textContent = this.countHits;
    } else if (ev.target.classList.contains('cell')) {
      this.countFails += 1;
      this.failControl.textContent = this.countFails;
    }
    this.countsControl();
  }

  showModal() {
    this.modal.classList.remove('hidden');
    this.button.classList.remove('hidden');
    this.board.removeEventListener('click', this.clickCounts);
    this.goblin.stopRenderingGame();
    this.button.addEventListener('click', this.clickNewGame);
  }

  closeModal() { // скрываем все элементы всплывающего окна
    this.modal.classList.add('hidden');
    this.button.classList.add('hidden');
    if (!this.fail.classList.contains('hidden')) {
      this.fail.classList.add('hidden');
    }
    if (!this.hit.classList.contains('hidden')) {
      this.hit.classList.add('hidden');
    }
  }

  clickNewGame() {
    this.button.removeEventListener('click', this.clickNewGame);
    this.closeModal();
    // this.resetCounts();
    this.startGame();
  }

  countsControl() {
    if (this.countFails === 5) {
      this.showModal();
      this.fail.classList.remove('hidden');
    }
    if (this.countHits === 10) {
      this.showModal();
      this.hit.classList.remove('hidden');
    }
  }

  resetCounts() {
    this.countFails = 0;
    this.countHits = 0;
    this.hitControl.textContent = this.countHits;
    this.failControl.textContent = this.countFails;
  }
}
