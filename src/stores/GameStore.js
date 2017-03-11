import EventEmitter from 'events';

class GameStore extends EventEmitter {
  constructor(...args) {
    super(...args);

    this.data = {
      gameOutcome: true,
      gamePrediction: true,
      winAmount: 0
    };
  }

  get(key) {
    console.log(key, this.data[key]);
    return this.data[key];
  }

  set(key, value) {
    return this.data[key] = value;
  }

  setGameOutcome() {
    return this.data.gameOutcome = Math.random() >= 0.5;
  }
}

export default new GameStore();
