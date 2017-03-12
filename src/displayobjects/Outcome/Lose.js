import { Sprite, Text, Texture } from 'pixi.js';

import { config } from '../../../package.json';

export default class LosingOutcome extends PIXI.Sprite {
  constructor() {
    super();

    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;

    const text = new Text('Sorry\n Dude\n You\'ve Lost', {
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
