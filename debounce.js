function debounce(fn, ms) {
  let interval;

  return (...args) => {
    if (interval) clearTimeout(interval);

    interval = setTimeout(fn, ms, ...args);
  };
}

const logger = debounce((arg) => console.log(arg), 1000);

logger();
logger();
logger(1);
