import PIXI, { Texture } from 'pixi.js';

import { config } from '../../../package.json';
import Button from '../../utils/button/Button';
import GameStore from '../../stores/GameStore';
import LEFTBUTTON from '../images/leftLady.png';
import RIGHTBUTTON from '../images/rightLady.png';
import LEFTBUTTONOVER from '../images/leftLadyOver.png';
import RIGHTBUTTONOVER from '../images/rightLadyOver.png';

export default class Bet extends PIXI.Sprite {

  constructor() {
    super();

    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;

    const leftButtonTexture = Texture.fromImage(LEFTBUTTON);
    const rightButtonTexture = Texture.fromImage(RIGHTBUTTON);
    const leftButtonTextureOver = Texture.fromImage(LEFTBUTTONOVER);
    const rightButtonTextureOver = Texture.fromImage(RIGHTBUTTONOVER);

    const leftButton = new Button(leftButtonTexture);
    const rightButton = new Button(rightButtonTexture);
    leftButton.set('texture', leftButtonTextureOver);
    leftButton.anchor.set(.5);
    leftButton.x = positionX + 230;
    leftButton.y = positionY + 325;
    leftButton.anchor.x = .5;
    leftButton.anchor.y = .33;
    leftButton.scale.x = 1.5;
    leftButton.scale.y = 1.5;
    leftButton.addInteractivityToButtons();
    leftButton.addButtonEvents();
    leftButton.on('click', () => {
      GameStore.set('gamePrediction', true);
      GameStore.get('gamePrediction');
    });

    rightButton.set('texture', rightButtonTextureOver);
    rightButton.anchor.set(.5);
    rightButton.x = positionX + 650;
    rightButton.y = positionY + 325;
    rightButton.anchor.x = .5;
    rightButton.anchor.y = .33;
    rightButton.scale.x = 1.5;
    rightButton.scale.y = 1.5;
    rightButton.addInteractivityToButtons();
    rightButton.addButtonEvents();
    rightButton.on('click', () => {
      GameStore.set('gamePrediction', false);
      GameStore.get('gamePrediction');
    });

    this.addChild(leftButton, rightButton);
  }
}
