import ScaledContainer from '../ScaledContainer/ScaledContainer.js';
import Ladies from '../Ladies/Ladies.js';
import Background from '../Background/Background.js';
import RendererStore from '../../stores/RendererStore.js';

export default class App extends ScaledContainer {

  constructor(...args) {
    const bg = new Background();

    super(...args);

    this.addChild(bg);

    this.addBunnies();

  }

  addBunnies() {
    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;

    let b1 = new Ladies();

    b1.position.x = cx;
    b1.position.y = cy;

    this.addChild(b1);
  }

}
