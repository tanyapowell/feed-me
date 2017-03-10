import PIXI from 'pixi.js';
import TEXTURE from '../../images/kitchen.png';

export default class Background extends PIXI.Container {

  constructor() {
    super();

    const bg = PIXI.Sprite.fromImage(TEXTURE);

    bg.anchor.x = 0;
    bg.anchor.y = 0;

    bg.position.x = -120;
    bg.position.y = 50;

    this.addChild(bg);
  }

}
