import { Sprite, Texture } from 'pixi.js';
import LADIES from '../../images/ladies.png';

export default class Ladies extends Sprite {

  constructor() {
    const texture = Texture.fromImage(LADIES);

    super(texture);

    this.anchor.x = .5;
    this.anchor.y = 0;

  }
}
