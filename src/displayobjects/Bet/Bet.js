import PIXI from 'pixi.js';

import { config } from '../../../package.json';
import Banner from './Banner';
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

    const leftButtonTexture = PIXI.Texture.fromImage(LEFTBUTTON);
    const rightButtonTexture = PIXI.Texture.fromImage(RIGHTBUTTON);
    const leftButtonTextureOver = PIXI.Texture.fromImage(LEFTBUTTONOVER);
    const rightButtonTextureOver = PIXI.Texture.fromImage(RIGHTBUTTONOVER);

    const banner = new Banner();

    const leftButton = new Button(leftButtonTexture);
    const rightButton = new Button(rightButtonTexture);

    const getReadyText = new PIXI.Text('', {
      fontWeight: 'bold',
      fontSize: 60,
      fontFamily: 'Helvetica',
      fill: '#cc00ff',
      align: 'center',
      stroke: '#FFFFFF',
      strokeThickness: 6
    })

    getReadyText.position.x = positionX - -250;
    getReadyText.position.y = positionY - -20;
    getReadyText.scale.x = 2;
    getReadyText.scale.y = 2;

    getReadyText.visible = false;

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
      banner.visible = false;
      getReadyText.visible = true;

      let counter = 3;
      const ticker = PIXI.ticker.shared;
      ticker.add( () => {
        counter -= 0.01;

        if (counter > 2) {
          getReadyText.text = 'Let\'s\n';
        }
        else if (counter > 1) {
          getReadyText.text = 'Let\'s\n Get\n';
        }
        else if (counter > 0) {
          getReadyText.text = 'Let\'s\n Get \n READY\n';
        }
        else {
          getReadyText.visible = false;
        }
      })
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
      banner.visible = false;

      getReadyText.visible = true;

      let counter = 3;
      const ticker = PIXI.ticker.shared;
      ticker.add( () => {
        counter -= 0.01;

        if (counter > 2) {
          getReadyText.text = 'Let\'s\n';
        }
        else if (counter > 1) {
          getReadyText.text = 'Let\'s\n Get\n';
        }
        else if (counter > 0) {
          getReadyText.text = 'Let\'s\n Get \n READY\n';
        }
        else {
          getReadyText.visible = false;
        }
      })

    });

    this.addChild(banner, leftButton, rightButton, getReadyText);
  }
}
