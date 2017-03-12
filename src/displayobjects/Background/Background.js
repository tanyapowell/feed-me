import PIXI from 'pixi.js';

import { config } from '../../../package.json';
import BACKGROUND_TEXTURE from '../images/kitchen.png';
import TABLE_TEXTURE from '../images/table.png';

export default class Background extends PIXI.Container {

  constructor() {
    super();

    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;

    const bg = PIXI.Sprite.fromImage(BACKGROUND_TEXTURE);
    const table = PIXI.Sprite.fromImage(TABLE_TEXTURE);

    bg.anchor.x = 0;
    bg.anchor.y = 0;
    bg.alpha = .7;
    bg.position.x = -120;
    bg.position.y = 50;

    table.x = positionX + 230;
    table.y = positionY + 420;
    table.scale.x = 1.5;
    table.scale.y = 1.5;

    const blurFilter = new PIXI.filters.BlurFilter();
    blurFilter.blur = 3;
    bg.filters = [blurFilter];

    this.addChild(bg, table);
  }

}
