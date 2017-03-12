import { Text } from 'pixi.js';

import { config } from '../../../package.json';

export default class Banner extends PIXI.Sprite {
  constructor() {
    super();

    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;

    const textContainer = new PIXI.Graphics();

    const text = new Text('Who\'s going to eat all the cake?\nPick your winner', {
      fontFamily: 'Hevetica',
      fontSize: 96,
      fill: '#cc00ff',
      align: 'center',
      stroke: '#FFFFFF'
    });

    textContainer.beginFill(0x000000);
    textContainer.lineStyle(2, 0xFFFFFF);
    textContainer.drawRect(positionX + 210, positionY, 410, 100);
    textContainer.alpha = .5;

    text.position.x = positionX - -250;
    text.position.y = positionY - -20;
    text.scale.x = 1.5;
    text.scale.y = 1.5;

    this.addChild(textContainer, text);
  }
}
