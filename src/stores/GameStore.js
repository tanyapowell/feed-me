import EventEmitter from 'events';
import { BET_MADE } from '../constants/GameConstants';

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
    return this.data[key];
  }

  set(key, value) {
    return this.data[key] = value;
  }

  setGameOutcome() {
    return this.data.gameOutcome = Math.random() >= 0.5;
  }

  emitChange() {
    this.emit(BET_MADE, this.data);
  }

  addChangeListener(callback) {
    this.on(BET_MADE, callback, this.data);
  }

  isWinner() {
    let winner = false;
    if (this.data.gameOutcome === this.data.gamePrediction) {
      winner = true;
    }
    return winner;
  }

}

export default new GameStore();
