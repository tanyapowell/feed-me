import PIXI from 'pixi.js';

export default class Button extends PIXI.Sprite {

  constructor(...args){
    super(...args);

    this.data = {
      texture: 0,
      textureNormal: 0
    }

    new PIXI.Sprite(this.data.textureNormal);
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    return this.data[key] = value;
  }

  setTexture(texture) {
    this.set('textureNormal', texture);
  }

  addInteractivityToButtons() {
    this.buttonMode = true;
    this.interactive = true;
  }

  addButtonEvents() {
      this
        .on('touchstart', this.onButtonDown)
        .on('touchend', this.onButtonUp)
        .on('touchendoutside', this.onButtonUp)
        .on('mousedown', this.onButtonDown)
        .on('mouseup', this.onButtonUp)
        .on('mouseupoutside', this.onButtonUp)
        .on('mouseover', this.onButtonOver)
        .on('mouseout', this.onButtonOut);
  }

  onButtonDown() {
    this.isdown = true;
    this.texture = this.data.texture;
    this.alpha = 1;
  }

  onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
      if (this.leftButton) {
        this.texture = this.data.texture;
      }
      else {
        this.texture = this.data.texture;
      }
    }
    else {
      this.texture = this.data.textureNormal;
    }
  }

  onButtonOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = this.data.texture;
  }

  onButtonOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
      this.texture = this.data.texture;
  }
}
