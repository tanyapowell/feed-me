import ScaledContainer from '../ScaledContainer/ScaledContainer';
import Background from '../Background/Background';
import Game from '../Game/Game';

export default class App extends ScaledContainer {

  constructor(...args) {
    const bg = new Background();
    const game = new Game();

    super(...args);

    this.addChild(bg);
    this.addChild(game);
  }
}
