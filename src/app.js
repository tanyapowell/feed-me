import './index.html';
import { config } from '../package.json';
import framesCounter from './utils/fps/framesCounter';
import Renderer from './Renderer/Renderer';
import App from './displayobjects/App/App';
import GameStore from './stores/GameStore';

const renderer = new Renderer(config.stageWidth, config.stageHeight);
const app = new App(config.stageWidth, config.stageHeight);

document.body.appendChild(renderer.view);

GameStore.set('gameOutcome', GameStore.setGameOutcome());

renderer.addRenderable(app);
renderer.start();
framesCounter();
