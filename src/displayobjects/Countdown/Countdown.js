import PIXI from 'pixi.js';

import { config } from '../../../package.json';

export default class Countdown extends PIXI.Sprite {
  constructor() {
    super();

    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;
    const readyText = new PIXI.Text('', {
      fontWeight: 'bold',
      fontSize: 60,
      fontFamily: 'Arial',
      fill: '#cc00ff',
      align: 'center',
      stroke: '#FFFFFF',
      strokeThickness: 6
    })
    const goText = new PIXI.Text('', {
      fontWeight: 'bold',
      fontSize: 60,
      fontFamily: 'Arial',
      fill: '#cc00ff',
      align: 'center',
      stroke: '#FFFFFF',
      strokeThickness: 6
    })

    readyText.position.x = positionX - -250;
    readyText.position.y = positionY - -20;
    readyText.scale.x = 2;
    readyText.scale.y = 2;
    goText.position.x = positionX - -300;
    goText.position.y = positionY - -100;
    goText.scale.x = 3;
    goText.scale.y = 3;

    this.addChild(readyText, goText);

    let counter = 6;
    const ticker = PIXI.ticker.shared;
    ticker.add( () => {
      counter -= 0.01;

      if (counter > 3) {
        readyText.text = 'Ready?\n' + Math.floor(counter);
      }
      else if (counter > 1) {
        readyText.text = 'Steady?\n' + Math.floor(counter);
      }
      else {
        readyText.text = '';
        goText.text = 'GO!\n';
      }
    })
  }
}
