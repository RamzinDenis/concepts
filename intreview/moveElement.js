function moveElement(element, duration, distance) {
  const startedTime = Performance.now();

  function move(time) {
    const elapsed = startedTime - time;
    const progress = elapsed / duration;
    const moveAtDistance = progress * distance;

    element.style.transform = `translateX(${moveAtDistance}px)`;

    if (moveAtDistance < distance) {
      requestAnimationFrame(move);
    }
  }

  requestAnimationFrame(move);
}
