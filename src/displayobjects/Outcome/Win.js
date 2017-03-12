import PIXI from 'pixi.js';

import { config } from '../../../package.json';

export default class WinningOutcome extends PIXI.Sprite {
  constructor() {
    super();


    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;

    const text = new PIXI.Text('Congratulations\n YOU\'VE\n WON', {
      fontFamily: 'Hevetica',
      fontSize: 96,
      fill: '#cc00ff',
      align: 'center',
      stroke: '#FFFFFF',
      strokeThickness: 3
    });

    text.position.x = positionX - -250;
    text.position.y = positionY - -20;
    text.scale.x = 1.5;
    text.scale.y = 1.5;

    this.addChild(text);

  }
}
