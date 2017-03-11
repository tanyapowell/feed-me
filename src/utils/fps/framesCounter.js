import Stats from 'stats-js';

export default function framesCounter() {
  const stats = new Stats();
  stats.setMode(0);

  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.body.appendChild( stats.domElement );

  setInterval( () => {
      stats.begin();
      stats.end();

  }, 1000 / 60 );
}
