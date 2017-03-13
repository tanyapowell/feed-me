import PIXI from 'pixi.js';

import { config } from '../../../package.json';
import Banner from './Banner';
import Button from '../../utils/button/Button';
import GameStore from '../../stores/GameStore';
import GameWin from '../Outcome/Win';
import GameLoss from '../Outcome/Lose';
import CAKE_TEXTURE from '../images/cake.png';
import CAKE_TEXTURE_1 from '../images/cake1.png';
import CAKE_TEXTURE_3 from '../images/cake3.png';
import CAKE_TEXTURE_4 from '../images/cake4.png';
import CAKE_TEXTURE_5 from '../images/cake6.png';
import LEFT_BUTTON from '../images/leftLady.png';
import RIGHT_BUTTON from '../images/rightLady.png';
import LEFT_BUTTON_OVER from '../images/leftLadyOver.png';
import RIGHT_BUTTON_OVER from '../images/rightLadyOver.png';
import LEFT_LADY_FAT_1 from '../images/leftLady1.png';
import LEFT_LADY_FAT_2 from '../images/leftLady2.png';
import LEFT_LADY_FAT_3 from '../images/leftLady3.png';
import LEFT_LADY_FAT_4 from '../images/leftLady4.png';
import RIGHT_LADY_FAT_1 from '../images/rightLady1.png';
import RIGHT_LADY_FAT_2 from '../images/rightLady2.png';
import RIGHT_LADY_FAT_3 from '../images/rightLady3.png';
import RIGHT_LADY_FAT_4 from '../images/rightLady4.png';

const leftButtonTexture = PIXI.Texture.fromImage(LEFT_BUTTON);
const rightButtonTexture = PIXI.Texture.fromImage(RIGHT_BUTTON);

export default class Bet extends PIXI.Sprite {

  constructor() {
    super();

    const positionX = config.stageWidth / 3.5;
    const positionY = config.stageHeight / 5;

    const cakeTexture = PIXI.Texture.fromImage(CAKE_TEXTURE);
    const leftButtonTextureOver = PIXI.Texture.fromImage(LEFT_BUTTON_OVER);
    const rightButtonTextureOver = PIXI.Texture.fromImage(RIGHT_BUTTON_OVER);

    const banner = new Banner();
    const cake = new PIXI.Sprite(cakeTexture);
    const leftButton = new Button(leftButtonTexture);
    const rightButton = new Button(rightButtonTexture);
    const gameWin = new GameWin();
    const gameLoss = new GameLoss();
    const getReadyText = new PIXI.Text('', {
      fontWeight: 'bold',
      fontSize: 60,
      fontFamily: 'Helvetica',
      fill: '#cc00ff',
      align: 'center',
      stroke: '#FFFFFF',
      strokeThickness: 3
    })

    cake.position.x = positionX - -320;
    cake.position.y = positionY + 185;
    cake.scale.x = .4;
    cake.scale.y = .4;

    getReadyText.position.x = positionX - -250;
    getReadyText.position.y = positionY - -20;
    getReadyText.scale.x = 2;
    getReadyText.scale.y = 2;

    gameWin.visible = false;
    gameLoss.visible = false;
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
      this.buttonUpdates(leftButton, rightButton);
      GameStore.set('gamePrediction', true);
      banner.visible = false;
      getReadyText.visible = true;
      this.countdown(getReadyText);
      setTimeout(() => {
        this.eatCake(cake, leftButton, rightButton);
      }, 6000);
      setTimeout(() => {
        this.gameOutcome(gameWin, gameLoss)
      }, 12000);
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
      this.buttonUpdates(leftButton, rightButton);
      GameStore.set('gamePrediction', false);
      banner.visible = false;
      getReadyText.visible = true;
      this.countdown(getReadyText);
      setTimeout(() => {
        this.eatCake(cake, leftButton, rightButton);
      }, 6000);
      setTimeout(() => {
        this.gameOutcome(gameWin, gameLoss)
      }, 12000);
    });

    this.addChild(banner, cake, leftButton, rightButton, getReadyText, gameWin, gameLoss);
  }

  buttonUpdates(buttonX, buttonY) {
    buttonX.texture = leftButtonTexture;
    buttonY.texture = rightButtonTexture;
    buttonX.removeInteractivityToButtons();
    buttonY.removeInteractivityToButtons();
  }

  countdown(countdownText) {
      let counter = 3;
      const ticker = PIXI.ticker.shared;
      ticker.add( () => {
        counter -= 0.01;

        if (counter > 2) {
          countdownText.text = 'Let\'s\n';
        }
        else if (counter > 1) {
          countdownText.text = 'Let\'s\n Get\n';
        }
        else if (counter > 0) {
          countdownText.text = 'Let\'s\n Get \n READY\n';
        }
        else {
          countdownText.visible = false;
        }
      })
    }

  eatCake(cakeTexture, leftButtonTexture, rightButtonTexture) {
    const cakeTexture1 = PIXI.Texture.fromImage(CAKE_TEXTURE_1);
    const cakeTexture3 = PIXI.Texture.fromImage(CAKE_TEXTURE_3);
    const cakeTexture4 = PIXI.Texture.fromImage(CAKE_TEXTURE_4);
    const cakeTexture5 = PIXI.Texture.fromImage(CAKE_TEXTURE_5);
    const rightLadyFat1 = PIXI.Texture.fromImage(RIGHT_LADY_FAT_1);
    const rightLadyFat2 = PIXI.Texture.fromImage(RIGHT_LADY_FAT_2);
    const rightLadyFat3 = PIXI.Texture.fromImage(RIGHT_LADY_FAT_3);
    const rightLadyFat4 = PIXI.Texture.fromImage(RIGHT_LADY_FAT_4);
    const leftLadyFat1 = PIXI.Texture.fromImage(LEFT_LADY_FAT_1);
    const leftLadyFat2 = PIXI.Texture.fromImage(LEFT_LADY_FAT_2);
    const leftLadyFat3 = PIXI.Texture.fromImage(LEFT_LADY_FAT_3);
    const leftLadyFat4 = PIXI.Texture.fromImage(LEFT_LADY_FAT_4);

      let counter = 3;
      const ticker = PIXI.ticker.shared;
      ticker.add( () => {
        counter -= 0.01;

        if (counter > 2) {
          cakeTexture.texture = cakeTexture1;
          if(GameStore.get('gameOutcome') === true) {
            leftButtonTexture.texture = leftLadyFat1;
          }
          else {
            rightButtonTexture.texture = rightLadyFat1;
          }
        }
        else if (counter > 1) {
          cakeTexture.texture = cakeTexture3;
          if(GameStore.get('gameOutcome') === true) {
            leftButtonTexture.texture = leftLadyFat2;
          }
          else {
            rightButtonTexture.texture = rightLadyFat2;
          }
        }
        else if (counter > 0) {
          cakeTexture.texture = cakeTexture4;
          if(GameStore.get('gameOutcome') === true) {
            leftButtonTexture.texture = leftLadyFat3;
          }
          else {
            rightButtonTexture.texture = rightLadyFat3;
          }
        }
        else {
          cakeTexture.texture = cakeTexture5;
          if(GameStore.get('gameOutcome') === true) {
            leftButtonTexture.texture = leftLadyFat4;
          }
          else {
            rightButtonTexture.texture = rightLadyFat4;
          }
        }
      })
    }

  gameOutcome(win, loss) {
    if (GameStore.isWinner() === true) {
      win.visible = true;
    }
    else {
      loss.visible = true;
    }
  }
}
