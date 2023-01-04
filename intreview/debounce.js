function debounce(fn, ms) {
  let timeout;

  return function () {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, arguments);
      timeout = null;
    }, ms);
  };
}
