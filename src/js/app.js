import GoblinGame from './goblinGame/goblinGame';
import GoblinPlay from './goblinPlay/goblinPlay';

document.addEventListener('DOMContentLoaded', () => {
  const goblin = new GoblinGame(document.querySelector('.board'));
  const goblinPlay = new GoblinPlay(goblin);
  goblinPlay.startGame();
});
