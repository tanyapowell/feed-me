'use strict';

import PIXI from 'pixi.js';
import Bunny from '../Bunny/Bunny.js';

export default class BunnyGroup extends PIXI.DisplayObjectContainer {

  constructor() {
    var bunny;

    super();

    this.spreadX = 200;
    this.spreadY = 100;
    this.count = 12;

    for(var i of this.count) {
      bunny = new Bunny();

      bunny.position.x = Math.random() * this.spreadX;
      bunny.position.y = (Math.random() * this.spreadY * .2) + (this.spreadY * .8);

      this.addChild(bunny);
    }
  }
}