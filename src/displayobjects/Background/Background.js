import { config } from '../../../package.json';
import PIXI from 'pixi.js';
import TEXTURE from '../images/kitchen.png';
import Webfont from 'webfontloader';

export default class Background extends PIXI.Container {

  constructor() {
    super();

    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;

    const bg = PIXI.Sprite.fromImage(TEXTURE);
    const text = new PIXI.Text('Who do you think is gong to get the cake?', { fontFamily: 'Hevetica', fontSize: 96, fill: 0xFFFFFF, align: 'center' });

    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x00000);
    graphics.lineStyle(2, 0xFFFFFF);
    graphics.drawRect(positionX, positionY, 820, 100);
    graphics.alpha = .5;

    bg.anchor.x = 0;
    bg.anchor.y = 0;
    bg.alpha = .7;
    bg.position.x = -120;
    bg.position.y = 50;

    const blurFilter = new PIXI.filters.BlurFilter();
    blurFilter.blur = 3;
    bg.filters = [blurFilter];

    text.position.x = positionX - -10;
    text.position.y = positionY - -20;
    text.scale.x = 1.5;
    text.scale.y = 1.5;

    this.addChild(bg);
    // this.addChild(graphics);
    // this.addChild(text);
  }

}
