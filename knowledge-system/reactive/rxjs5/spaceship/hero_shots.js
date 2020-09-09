const SHOOTING_SPEED = 15;
const SCORE_INCREASE = 10;

const playerFiring = Rx.Observable.merge(
  Rx.Observable.fromEvent(canvas, 'click'),
  Rx.Observable.fromEvent(document, 'keydown').filter(evt => evt.keycode === 32),
)
.startWith({})
.sampleTime(200)
.timestamp();

const heroShots = Rx.Observable.combineLatest(playerFiring, spaceShip, (shotEvents, spaceship) => ({
  timestamp: shotEvents.timestamp,
  x: spaceship.x,
}))
.distinctUntilChanged((shot1, shot2) => shot1.timestamp === shot2.timestamp)
.scan((shotArray, shot) => {
  shotArray.push({
    x: shot.x,
    y: HERO_Y,
  });
  return shotArray;
}, []);

function paintHeroShots(heroShots, enemies) {
  heroShots.forEach((shot, i) => {
    for (let l = 0; l < enemies.length; l++) {
      const enemy = enemies[l];
      if (!enemy.isDead && collision(shot, enemy)) {
        scoreSubject.next(SCORE_INCREASE);
        enemy.isDead = true;
        shot.x = shot.y = -100;
        break;
      }
    }
    shot.y -= SHOOTING_SPEED;
    drawTriangle(shot.x, shot.y, 5, '#ffff00', 'up');
  })
}
