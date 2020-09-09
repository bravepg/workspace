function renderScene(actors) {
  paintStars(actors.stars);
  paintSpaceShip(actors.spaceship.x, actors.spaceship.y);
  paintEnemies(actors.enemies);
  paintHeroShots(actors.heroShots, actors.enemies);
  paintScore(actors.score);
}

Rx.Observable.combineLatest(starStream, spaceShip, enemies, heroShots, scoreSubject, (
  stars, spaceship, enemies, heroShots, score
) => ({
  stars,
  spaceship,
  enemies,
  heroShots,
  score,
}))
.sampleTime(SPEED)
.takeWhile(actors => gameOver(actors.spaceship, actors.enemies) === false)
.subscribe(renderScene);
