function paintScore(score) {
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText(`Score: ${score}`, 40, 30);
}

const scoreSubject = new Rx.BehaviorSubject(0);
const score = scoreSubject.scan((prev, cur) => prev + cur, 0);

