import PIXI from 'pixi.js';
import TEXTURE from '../images/kitchen.png';

export default class Background extends PIXI.Container {

  constructor() {
    super();

    const bg = PIXI.Sprite.fromImage(TEXTURE);

    bg.anchor.x = 0;
    bg.anchor.y = 0;
    bg.alpha = .7;
    bg.position.x = -120;
    bg.position.y = 50;

    const blurFilter = new PIXI.filters.BlurFilter();
    blurFilter.blur = 3;
    bg.filters = [blurFilter];

    this.addChild(bg);
  }

}
