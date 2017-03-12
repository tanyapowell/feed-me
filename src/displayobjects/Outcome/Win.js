import { Sprite, Text, Texture } from 'pixi.js';
import TEXTURE from '../images/fireworks.png';

import { config } from '../../../package.json';

export default class WinningOutcome extends PIXI.Sprite {
  constructor() {
    super();

    const bg = PIXI.Sprite.fromImage(TEXTURE);

    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;

    const text = new Text('Congratulations\n YOU\'VE\n WON', {
      fontFamily: 'Hevetica',
      fontSize: 96,
      fill: '#cc00ff',
      align: 'center',
      stroke: '#FFFFFF',
      strokeThickness: 3
    });

    bg.position.x = positionX - -150;
    bg.position.y = positionY;
    text.position.x = positionX - -250;
    text.position.y = positionY - -20;
    text.scale.x = 1.5;
    text.scale.y = 1.5;

    this.addChild(bg, text);
  }
}
