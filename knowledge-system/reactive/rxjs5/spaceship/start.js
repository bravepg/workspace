const SPEED = 40;
const STAR_NUMBER = 250;
function animationLoop() {
  return Rx.Observable.generate(0, () => true, x => x + 1, x => x, Rx.Scheduler.animationFrame);
}

const starStream = Rx.Observable.range(1, STAR_NUMBER)
  .map(() => ({
    x: parseInt(Math.random() * canvas.width, 10),
    y: parseInt(Math.random() * canvas.height, 10),
    size: Math.random() * 3 + 1,
  }))
  .toArray()
  .flatMap(starArray => animationLoop().map(() => {
    starArray.forEach(star => {
      if (star.y >= canvas.height) {
        star.y = 0;
      }
      star.y += star.size;
    });

    return starArray;
  }))


function paintStars(stars) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  stars.forEach(star => {
    ctx.fillRect(star.x, star.y, star.size, star.size);
  });
}


